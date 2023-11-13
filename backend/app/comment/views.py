

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
        # Save user's comment
        post_id = self.kwargs.get(self.lookup_url_kwarg)
        target_post = get_object_or_404(Post, id=post_id)
        user_comment = serializer.save(user=self.request.user, post=target_post)

        # Generate GPT bot comment based on user's comment
        # Replace 'text' with the correct field name, e.g., 'content'
        gpt_bot_comment_text = self.create_gpt_comment(target_post, user_comment.content)

        # Ensure there is a GPT bot user
        gpt_bot_user = get_user_model().objects.get_or_create(username='gpt_bot')[0]

        # Save GPT bot comment
        if gpt_bot_comment_text:
            Comment.objects.create(user=gpt_bot_user, post=target_post, content=gpt_bot_comment_text)

    def create_gpt_comment(self, post, user_comment_text):

        messages_history = [{"role": "system", "content": " You are a motivator AI, named MotivAItor. Your role is to encourage and support people in their efforts to address climate challenges. When someone posts about their struggles or achievements in tackling climate change, you will respond with cheerful, supportive, and motivating comments. Your responses should be positive, uplifting, and focused on empowering the person to continue their efforts. Be creative in your encouragement, and remember to acknowledge their efforts and progress. Here are some examples of how you might respond:Post: I just planted ten trees this weekend but sometimes feel it's not enough to make a difference.Response: That's amazing! Every tree counts and your effort is truly making a difference. Remember, big changes start with small steps. Keep up the great work!Post: Feeling overwhelmed by all the negative news about climate change.Response: It's natural to feel that way. But remember, every positive action you take contributes to a better future. Stay strong and focused on the good you can do. Together, we can make a difference!"}]

        user_message = {"role": "user", "content": f" {user_comment_text}"}
        messages_history.append(user_message)
        try:
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=messages_history
            )
            bot_message = {"role": "assistant", "content": response.choices[0].message['content']}
            messages_history.append(bot_message)
            return bot_message['content']
        except Exception as e:
            return str(e)

