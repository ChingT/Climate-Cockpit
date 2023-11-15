import os

import openai
from django.contrib.auth import get_user_model
from post.models import Post
from rest_framework.generics import (
    CreateAPIView,
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
    get_object_or_404,
)
from rest_framework.permissions import SAFE_METHODS, IsAdminUser, IsAuthenticated
from user.permissions import IsOwner

from .models import Comment
from .serializers import CommentSerializer

openai.api_key = os.environ.get("OPENAI_API_KEY")

User = get_user_model()


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


class CreateBotCommentAPIView(CreateAPIView):
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

        self.create_chatbot_comment(target_post, user_comment)

    def create_chatbot_comment(self, target_post, user_comment):
        chatbot_users = User.objects.filter(is_chatbot=True)
        for chatbot_user in chatbot_users:
            if chatbot_user.followers.filter(id=self.request.user.id).exists():
                chatbot_response = self.get_chatbot_response(
                    chatbot_user, user_comment.content
                )
                Comment.objects.create(
                    user=chatbot_user, post=target_post, content=chatbot_response
                )

    def get_chatbot_response(self, chatbot_user, user_text):
        user_message = {"role": "user", "content": user_text}
        messages_history = [
            {"role": "system", "content": chatbot_user.chatbot_description},
            user_message,
        ]
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo", messages=messages_history
        )
        bot_message = {
            "role": "assistant",
            "content": response.choices[0].message["content"],
        }
        messages_history.append(bot_message)

        return bot_message["content"]
