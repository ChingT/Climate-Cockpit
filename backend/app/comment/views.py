from post.models import Post
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
    get_object_or_404,
)
from rest_framework.permissions import SAFE_METHODS, IsAuthenticated
from user.permissions import IsAdmin, IsOwner

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

    def get_permission_classes(self):
        if self.request.method in SAFE_METHODS:
            return [IsAuthenticated]
        return [IsOwner | IsAdmin]
