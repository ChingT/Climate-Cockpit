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
def create_chatbot_comment_for_post(sender, instance, created, **kwargs):
    if created:
        create_chatbot_comment(instance)


def create_chatbot_comment(target_post: Post):
    chatbot_users = User.objects.filter(is_chatbot=True)
    for chatbot_user in chatbot_users.filter(followers__id=target_post.user.id):
        chatbot_response = get_chatbot_response(chatbot_user, target_post.content)
        create_comment(chatbot_user, target_post, chatbot_response)


def create_comment(user, post, content):
    Comment.objects.create(user=user, post=post, content=content)


def get_chatbot_response(chatbot_user: User, user_text: str):
    user_message = {"role": USER_ROLE, "content": user_text}
    system_message = {"role": SYSTEM_ROLE, "content": chatbot_user.chatbot_description}
    messages_history = [system_message, user_message]
    response = client.chat.completions.create(
        model=OPENAI_MODEL_NAME, messages=messages_history
    )
    return response.choices[0].message.content
