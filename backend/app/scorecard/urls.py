from django.urls import path

from .views import (
    ListScorecardAPIView,
    RetrieveDestroyScorecardAPIView,
    ToggleSelectSolution,
)

urlpatterns = [
    path("list/", ListScorecardAPIView.as_view(), name="scorecard-list"),
    path("", RetrieveDestroyScorecardAPIView.as_view(), name="scorecard-detail"),
    path(
        "toggle-select/<int:solution_id>/",
        ToggleSelectSolution.as_view(),
        name="scorecard-toggle-select",
    ),
]
