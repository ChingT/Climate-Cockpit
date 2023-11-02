"""
users/ GET: Get all the users
users/?search=<str:search_string> GET: Search users
users/<int:user_id>/ GET: Get a specific user’s profile

users/me/ GET: Get logged in user’s profile (as well
as private information like email, etc.)
users/me/ PATCH: Update the logged in user’s profile public info
users/me/ DELETE: Delete the logged in user’s profile and all related
data (posts, comments, likes, etc.)
"""

from django.urls import path

from user.users.views import GetUpdateDeleteMeAPIView, GetUserAPIView, ListUserAPIView

urlpatterns = [
    path("", ListUserAPIView.as_view(), name="user-list"),
    path("<int:user_id>/", GetUserAPIView.as_view(), name="user-details"),
    path("me/", GetUpdateDeleteMeAPIView.as_view(), name="user-me"),
]
