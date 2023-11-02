"""
social/followers/toggle-follow/<int:user_id>/ POST: Toggle follow/unfollow a user
social/followers/followers/ GET: List of all the logged in user’s followers
social/followers/following/ GET: List of all the people the current logged in user
is following
"""

from django.urls import path

from user.social.views import ListFollowersUser, ListFollowingUser, ToggleFollowingUser

urlpatterns = [
    path("followers/", ListFollowersUser.as_view(), name="user-list-followers"),
    path("following/", ListFollowingUser.as_view(), name="user-list-following"),
    path(
        "toggle-follow/<int:user_id>/",
        ToggleFollowingUser.as_view(),
        name="user-toggle-following",
    ),
]
