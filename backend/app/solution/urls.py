from django.urls import path

from .views import (
    ListCategoryAPIView,
    ListResourceAPIView,
    ListSolutionAPIView,
    RetrieveSolutionAPIView,
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
]
