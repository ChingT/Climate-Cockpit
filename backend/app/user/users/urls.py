from django.urls import path

from user.users.views import GetUpdateDeleteMeAPIView, GetUserAPIView, ListUserAPIView

urlpatterns = [
    path("", ListUserAPIView.as_view(), name="user-list"),
    path("<int:user_id>/", GetUserAPIView.as_view(), name="user-details"),
    path("me/", GetUpdateDeleteMeAPIView.as_view(), name="user-me"),
]
