from django.urls import path

from .views import ListScorecardAPIView, RetrieveDestroyScorecardAPIView

urlpatterns = [
    path("list/", ListScorecardAPIView.as_view(), name="scorecard-list"),
    path("", RetrieveDestroyScorecardAPIView.as_view(), name="scorecard-detail"),
]
