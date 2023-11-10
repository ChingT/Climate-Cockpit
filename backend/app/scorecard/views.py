from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.generics import (
    CreateAPIView,
    GenericAPIView,
    ListAPIView,
    RetrieveDestroyAPIView,
    get_object_or_404,
)
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from solution.models import Solution
from user.permissions import IsOwner

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


class CreateScorecardAPIView(CreateAPIView):
    """post: Create a scorecard.

    Create a scorecard for the logged-in user.
    """

    queryset = Scorecard.objects.all()
    serializer_class = ScorecardSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        user = self.request.user
        if Scorecard.objects.filter(user=user).exists():
            return Response(
                {"detail": "Scorecard for the user already exists"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        return super().create(request, *args, **kwargs)

    def perform_create(self, serializer: ScorecardSerializer):
        serializer.save(user=self.request.user)


class RetrieveDestroyScorecardAPIView(RetrieveDestroyAPIView):
    """get: Retrieve the scorecard.

    Retrieve the scorecard of the logged-in user.

    delete: Delete the scorecard.

    Delete the scorecard of the logged-in user.
    """

    serializer_class = ScorecardSerializer
    permission_classes = [IsOwner | IsAdminUser]

    def get_object(self):
        return get_object_or_404(Scorecard.objects.all(), user=self.request.user)


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
