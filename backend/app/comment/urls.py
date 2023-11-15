from django.urls import path

from .views import (
    ListCreateBotCommentAPIView,
    ListCreateCommentAPIView,
    RetrieveUpdateDestroyCommentAPIView,
)

urlpatterns = [
    path("<int:post_id>/", ListCreateCommentAPIView.as_view(), name="comment-list"),
    path(
        "comment/<int:comment_id>/",
        RetrieveUpdateDestroyCommentAPIView.as_view(),
        name="comment-detail",
    ),
    path(
        "bot-comment/<int:post_id>/",
        ListCreateBotCommentAPIView.as_view(),
        name="bot-comment-create",
    ),
]
