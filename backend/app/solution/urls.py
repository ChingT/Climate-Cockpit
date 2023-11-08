from django.urls import path

from .views import (
    ListCategoryAPIView,
    ListSolutionAPIView,
    RetrieveCategoryAPIView,
    RetrieveSolutionAPIView,
)

urlpatterns = [
    path("", ListSolutionAPIView.as_view(), name="solution-list"),
    path(
        "<int:solution_id>/", RetrieveSolutionAPIView.as_view(), name="solution-detail"
    ),
    path("category/", ListCategoryAPIView.as_view(), name="category-list"),
    path(
        "category/<int:category_id>/",
        RetrieveCategoryAPIView.as_view(),
        name="category-detail",
    ),
]
