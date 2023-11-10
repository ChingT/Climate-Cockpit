from django.urls import path

from .views import (
    ListCategoryAPIView,
    ListResourceAPIView,
    ListSolutionAPIView,
    ListUserSelectionAPIView,
    RetrieveDestroyUserSelectionAPIView,
    RetrieveSolutionAPIView,
    ToggleSelectSolution,
)

urlpatterns = [
    path("solutions/", ListSolutionAPIView.as_view(), name="solution-list"),
    path(
        "solutions/<int:solution_id>/",
        RetrieveSolutionAPIView.as_view(),
        name="solution-detail",
    ),
    path("categories/", ListCategoryAPIView.as_view(), name="category-list"),
    path(
        "resources/<int:solution_id>/",
        ListResourceAPIView.as_view(),
        name="resource-list-solution",
    ),
    path(
        "toggle-select/<int:solution_id>/",
        ToggleSelectSolution.as_view(),
        name="toggle-select-solution",
    ),
    path(
        "user-selections/list/",
        ListUserSelectionAPIView.as_view(),
        name="user-selections-list",
    ),
    path(
        "user-selections/",
        RetrieveDestroyUserSelectionAPIView.as_view(),
        name="user-selections-detail",
    ),
]
