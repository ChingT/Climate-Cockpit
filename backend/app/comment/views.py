from comment.models import Comment
from comment.serializers import CommentSerializer
from post.models import Post
from rest_framework.generics import ListCreateAPIView, get_object_or_404


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
        return Comment.objects.filter(post=target_post)

    def perform_create(self, serializer):
        post_id = self.kwargs.get(self.lookup_url_kwarg)
        target_post = get_object_or_404(Post, id=post_id)
        serializer.save(user=self.request.user, post=target_post)
