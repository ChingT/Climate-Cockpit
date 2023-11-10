from django.urls import path

from .views import (
    CreateScorecardAPIView,
    ListScorecardAPIView,
    RetrieveDestroyScorecardAPIView,
    ToggleSelectSolution,
)

urlpatterns = [
    path("list/", ListScorecardAPIView.as_view(), name="scorecard-list"),
    path("new/", CreateScorecardAPIView.as_view(), name="scorecard-create"),
    path("", RetrieveDestroyScorecardAPIView.as_view(), name="scorecard-detail"),
    path(
        "toggle-select/<int:solution_id>/",
        ToggleSelectSolution.as_view(),
        name="scorecard-toggle-select",
    ),
]
