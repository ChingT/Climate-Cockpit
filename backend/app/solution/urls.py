from django.urls import path

from .views import (
    ListCategoryAPIView,
    ListResourceAPIView,
    ListSolutionAPIView,
    RetrieveCategoryAPIView,
    RetrieveResourceAPIView,
    RetrieveSolutionAPIView,
)

urlpatterns = [
    path("solution/list/", ListSolutionAPIView.as_view(), name="solution-list"),
    path(
        "solution/<int:solution_id>/",
        RetrieveSolutionAPIView.as_view(),
        name="solution-detail",
    ),
    path("category/list/", ListCategoryAPIView.as_view(), name="category-list"),
    path(
        "category/<int:category_id>/",
        RetrieveCategoryAPIView.as_view(),
        name="category-detail",
    ),
    path("resource/list/", ListResourceAPIView.as_view(), name="resource-list"),
    path(
        "resource/<int:resource_id>/",
        RetrieveResourceAPIView.as_view(),
        name="resource-detail",
    ),
]
