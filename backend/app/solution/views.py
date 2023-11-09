from rest_framework.filters import OrderingFilter, SearchFilter
from rest_framework.generics import ListAPIView, RetrieveAPIView, get_object_or_404

from .models import Category, Resource, Solution
from .serializers import CategorySerializer, ResourceSerializer, SolutionSerializer


class CategorySearchFilter(SearchFilter):
    search_param = "category"
    search_description = "Category name"


class ListSolutionAPIView(ListAPIView):
    """get: List all solutions.

    List all solutions.
    You can also apply filters and sorting to customize the results. For example,
    - To filter the solutions by category buildings: /solutions/?category=buildings
    - To list solutions sorted by name alphabetically: /solutions/?ordering=name
    - To list solutions sorted by impact in descending order: \
        /solutions/?ordering=-impact
    """

    queryset = Solution.objects.all()
    serializer_class = SolutionSerializer
    filter_backends = [CategorySearchFilter, OrderingFilter]
    search_fields = ["=category__name"]
    ordering = ["id"]


class RetrieveSolutionAPIView(RetrieveAPIView):
    """get: Retrieve a solution.

    Retrieve a solution by solution ID.
    """

    queryset = Solution.objects.all()
    serializer_class = SolutionSerializer
    lookup_url_kwarg = "solution_id"


class ListCategoryAPIView(ListAPIView):
    """get: List all categories.

    List all categories.
    """

    queryset = Category.objects.all().order_by("id")
    serializer_class = CategorySerializer


class ResourceTypeSearchFilter(SearchFilter):
    search_param = "type"
    search_description = f"Select from {Resource.TypeChoices.labels}"


class ListResourceAPIView(ListAPIView):
    """get: List all resources belonged to a solution.

    List all resources belonged to a solution by solution ID.
    """

    serializer_class = ResourceSerializer
    lookup_url_kwarg = "solution_id"
    filter_backends = [ResourceTypeSearchFilter]
    search_fields = ["=resource_type"]

    def get_queryset(self):
        solution_id = self.kwargs.get(self.lookup_url_kwarg)
        target_solution = get_object_or_404(Solution, id=solution_id)
        return Resource.objects.filter(solution=target_solution).order_by("id")
