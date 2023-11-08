from rest_framework.filters import SearchFilter
from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import Solution
from .serializers import SolutionSerializer


class CategorySearchFilter(SearchFilter):
    search_param = "category"
    search_description = "Category name"


class ListSolutionAPIView(ListAPIView):
    """get: List all solutions.

    List all solutions.\
    You can filter the solutions by category.\
    For example, /solutions/?category=buildings
    """

    queryset = Solution.objects.all().order_by("id")
    serializer_class = SolutionSerializer
    filter_backends = [CategorySearchFilter]
    search_fields = ["category__name"]


class RetrieveSolutionAPIView(RetrieveAPIView):
    """get: Retrieve a solution.

    Retrieve a solution by solution ID.
    """

    queryset = Solution.objects.all()
    serializer_class = SolutionSerializer
    lookup_url_kwarg = "solution_id"
