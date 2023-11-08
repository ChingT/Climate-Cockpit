from rest_framework.filters import SearchFilter
from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import Solution
from .serializers import SolutionSerializer


class ListSolutionAPIView(ListAPIView):
    """get: List all solutions.

    List all solutions.\
    You can filter the solutions with the URL search parameters.\
    For example, to search for solutions with a keyword: /solutions/?search=keyword
    """

    queryset = Solution.objects.all().order_by("id")
    serializer_class = SolutionSerializer
    filter_backends = [SearchFilter]
    search_fields = ["name", "category__name", "text", "progress_text"]


class RetrieveSolutionAPIView(RetrieveAPIView):
    """get: Retrieve a solution.

    Retrieve a solution by solution ID.
    """

    queryset = Solution.objects.all()
    serializer_class = SolutionSerializer
    lookup_url_kwarg = "solution_id"
