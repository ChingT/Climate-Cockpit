import os

from comment.models import Comment
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver
from openai import OpenAI

from .models import Post

OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")
OPENAI_MODEL_NAME = "gpt-3.5-turbo"
USER_ROLE = "user"
SYSTEM_ROLE = "system"

client = OpenAI(api_key=OPENAI_API_KEY)
User = get_user_model()


@receiver(post_save, sender=Post)
def create_gptbot_comment_for_post(sender, instance, created, **kwargs):
    if created:
        create_gptbot_comment(instance)


def create_gptbot_comment(target_post: Post):
    gptbot_users = User.objects.filter(is_gptbot=True)
    for gptbot_user in gptbot_users.filter(followers__id=target_post.user.id):
        gptbot_response = get_gptbot_response(gptbot_user, target_post.content)
        create_comment(gptbot_user, target_post, gptbot_response)


def create_comment(user, post, content):
    Comment.objects.create(user=user, post=post, content=content)


def get_gptbot_response(gptbot_user: User, user_text: str):
    user_message = {"role": USER_ROLE, "content": user_text}
    system_message = {"role": SYSTEM_ROLE, "content": gptbot_user.gptbot_description}
    messages_history = [system_message, user_message]
    response = client.chat.completions.create(
        model=OPENAI_MODEL_NAME, messages=messages_history
    )
    return response.choices[0].message.content
