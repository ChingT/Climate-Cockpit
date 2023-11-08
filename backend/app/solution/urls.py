from django.urls import path

from .views import ListSolutionAPIView, RetrieveSolutionAPIView

urlpatterns = [
    path("", ListSolutionAPIView.as_view(), name="solution-list"),
    path(
        "<int:solution_id>/", RetrieveSolutionAPIView.as_view(), name="solution-detail"
    ),
]
