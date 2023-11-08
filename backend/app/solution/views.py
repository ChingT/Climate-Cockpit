from rest_framework.filters import OrderingFilter, SearchFilter
from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import Solution
from .serializers import SolutionSerializer


class CategorySearchFilter(SearchFilter):
    search_param = "category"
    search_description = "Category name"


class ListSolutionAPIView(ListAPIView):
    """get: List all solutions.

    List all solutions with filtering and sorting options.
    You can also apply filters and sorting to customize the results. For example,
    - To filter the solutions by category buildings: /solutions/?category=buildings
    - To list solutions sorted by name alphabetically: /solutions/?ordering=name
    - To list solutions sorted by impact in descending order: \
        /solutions/?ordering=-impact
    """

    queryset = Solution.objects.all().order_by("id")
    serializer_class = SolutionSerializer
    filter_backends = [CategorySearchFilter, OrderingFilter]
    search_fields = ["category__name"]


class RetrieveSolutionAPIView(RetrieveAPIView):
    """get: Retrieve a solution.

    Retrieve a solution by solution ID.
    """

    queryset = Solution.objects.all()
    serializer_class = SolutionSerializer
    lookup_url_kwarg = "solution_id"
