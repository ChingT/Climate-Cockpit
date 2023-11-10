from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.generics import (
    GenericAPIView,
    ListAPIView,
    RetrieveDestroyAPIView,
    get_object_or_404,
)
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from solution.models import Solution

from .models import Scorecard
from .serializers import ScorecardSerializer

User = get_user_model()


class ListScorecardAPIView(ListAPIView):
    """get: List all scorecards.

    List all scorecards. Only admin users can perform this operation.
    """

    queryset = Scorecard.objects.all().order_by("-created")
    serializer_class = ScorecardSerializer
    permission_classes = [IsAdminUser]


class RetrieveDestroyScorecardAPIView(RetrieveDestroyAPIView):
    """get: Retrieve the scorecard.

    Retrieve the scorecard of the logged-in user. \
    If the scorecard doesn't exist, create one.

    delete: Delete the scorecard.

    Delete the scorecard of the logged-in user.
    """

    serializer_class = ScorecardSerializer

    def get_object(self):
        return get_object_or_404(Scorecard, user=self.request.user)

    def retrieve(self, request, *args, **kwargs):
        instance, _ = Scorecard.objects.get_or_create(user=self.request.user)
        serializer = self.get_serializer(instance)
        return Response(serializer.data)


class ToggleSelectSolution(GenericAPIView):
    """Toggle select a solution.

    Toggle select a solution for the logged-in user by solution ID.
    """

    queryset = Solution
    serializer_class = ScorecardSerializer
    lookup_url_kwarg = "solution_id"

    def get_scorecard(self):
        return get_object_or_404(Scorecard.objects.all(), user=self.request.user)

    def post(self, request, *args, **kwargs):
        scorecard = self.get_scorecard()
        solution = self.get_object()
        selected_solutions = scorecard.selected_solutions
        if solution in selected_solutions.all():
            selected_solutions.remove(solution)
        else:
            selected_solutions.add(solution)

        serializer = self.get_serializer(scorecard)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
