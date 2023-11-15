import openai
from django.conf import settings
from django.contrib.auth import get_user_model
from post.models import Post
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
    get_object_or_404,
)
from rest_framework.permissions import SAFE_METHODS, IsAdminUser, IsAuthenticated
from user.permissions import IsOwner

from .models import Comment
from .serializers import CommentSerializer


class ListCreateCommentAPIView(ListCreateAPIView):
    """get: List all comments of a post.

    List all comments of a post by post ID.

    post: Create a new comment to a post.

    Create a new comment to a post by post ID.
    """

    serializer_class = CommentSerializer
    lookup_url_kwarg = "post_id"

    def get_queryset(self):
        post_id = self.kwargs.get(self.lookup_url_kwarg)
        target_post = get_object_or_404(Post, id=post_id)
        return Comment.objects.filter(post=target_post).order_by("-created")

    def perform_create(self, serializer):
        post_id = self.kwargs.get(self.lookup_url_kwarg)
        target_post = get_object_or_404(Post, id=post_id)
        serializer.save(user=self.request.user, post=target_post)


class RetrieveUpdateDestroyCommentAPIView(RetrieveUpdateDestroyAPIView):
    """get: Retrieve a comment.

    Retrieve a comment by comment ID.

    put: Update a comment.

    Update a comment by comment ID.

    patch: Update a comment partially.

    Update a comment partially by comment ID.

    delete: Delete a comment.

    Delete a comment by comment ID.
    """

    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    lookup_url_kwarg = "comment_id"

    def get_permissions(self):
        if self.request.method in SAFE_METHODS:
            permission_classes = [IsAuthenticated]
        else:
            permission_classes = [IsOwner | IsAdminUser]
        return [permission() for permission in permission_classes]


# set API key OpenAI
openai.api_key = settings.OPENAI_API_KEY


class ListCreateBotCommentAPIView(ListCreateAPIView):
    serializer_class = CommentSerializer
    lookup_url_kwarg = "post_id"

    def get_queryset(self):
        post_id = self.kwargs.get(self.lookup_url_kwarg)
        target_post = get_object_or_404(Post, id=post_id)
        return Comment.objects.filter(post=target_post).order_by("-created")

    def perform_create(self, serializer):
        post_id = self.kwargs.get(self.lookup_url_kwarg)
        target_post = get_object_or_404(Post, id=post_id)
        user_comment = serializer.save(user=self.request.user, post=target_post)

        # list of all gptbots
        bot_usernames = ["gpt_bot", "gpt_bot2", "gpt_bot3"]
        for bot_username in bot_usernames:
            bot_user, _ = get_user_model().objects.get_or_create(username=bot_username)

            # if user following gpt?
            if bot_user.followers.filter(id=self.request.user.id).exists():
                # generation gpt comment based on user comment
                bot_comment_text = self.create_bot_comment(
                    bot_username, target_post, user_comment.content
                )

                # save gpt comment
                if bot_comment_text:
                    Comment.objects.create(
                        user=bot_user, post=target_post, content=bot_comment_text
                    )

    def create_bot_comment(self, bot_username, post, user_comment_text):
        user_message = {"role": "user", "content": user_comment_text}
        if bot_username == "gpt_bot":
            # logic for gpt_bot
            messages_history = [
                {
                    "role": "system",
                    "content": (
                        "You are a motivator AI, named MotivAItor. "
                        "Support  efforts to address climate challenges. "
                        "Empower me to continue their efforts. "
                        "Be creative in your encouragement. "
                        "Answer me very shortly and cool!"
                    ),
                },
                user_message,
            ]

            return self.create_specific_bot_comment(
                post, user_comment_text, "motivator", messages_history
            )
        if bot_username == "gpt_bot2":
            messages_history = [
                {
                    "role": "system",
                    "content": (
                        "You are a fact-checking AI, named FactChecker. "
                        "Your role is to verify and provide accurate information about "
                        "Earths climate, and help dispel myths. Answer me very shortly "
                        "and cool!"
                    ),
                },
                user_message,
            ]
            return self.create_specific_bot_comment(
                post, user_comment_text, "informative", messages_history
            )
        if bot_username == "gpt_bot3":
            messages_history = [
                {
                    "role": "system",
                    "content": "You are an active climate revolutionist AI, "
                    "named EcoChampion. "
                    "Your role is to inpirate for protecting our Climate. "
                    "Answer me veryshortly and cool!",
                },
                user_message,
            ]
            return self.create_specific_bot_comment(
                post, user_comment_text, "supportive", messages_history
            )
        return None

    def create_specific_bot_comment(
        self, post, user_comment_text, bot_type, messages_history
    ):
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo", messages=messages_history
        )
        bot_message = {
            "role": "assistant",
            "content": response.choices[0].message["content"],
        }
        messages_history.append(bot_message)

        return bot_message["content"]
