from rest_framework.filters import OrderingFilter, SearchFilter
from rest_framework.generics import ListAPIView, RetrieveAPIView

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


class ListCategoryAPIView(ListAPIView):
    """get: List all categories.

    List all categories.
    """

    queryset = Category.objects.all().order_by("id")
    serializer_class = CategorySerializer


class RetrieveCategoryAPIView(RetrieveAPIView):
    """get: Retrieve a category.

    Retrieve a category by category ID.
    """

    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = "category_id"


class ListResourceAPIView(ListAPIView):
    """get: List all resources.

    List all resources.
    """

    queryset = Resource.objects.all().order_by("id")
    serializer_class = ResourceSerializer


class RetrieveResourceAPIView(RetrieveAPIView):
    """get: Retrieve a resource.

    Retrieve a resource by resource ID.
    """

    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
    lookup_url_kwarg = "resource_id"
