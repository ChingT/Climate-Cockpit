from comment.views import ListCreateCommentAPIView
from django.urls import path

urlpatterns = [
    path("<int:post_id>/", ListCreateCommentAPIView.as_view(), name="comment-list"),
]
