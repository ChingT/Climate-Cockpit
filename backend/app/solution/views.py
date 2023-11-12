from __future__ import annotations

from typing import TYPE_CHECKING

from rest_framework import status
from rest_framework.filters import OrderingFilter, SearchFilter
from rest_framework.generics import (
    GenericAPIView,
    ListAPIView,
    RetrieveAPIView,
    RetrieveDestroyAPIView,
    get_object_or_404,
)
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response

from .models import Category, Resource, SelectionLogic, Solution, UserSelection
from .serializers import (
    CategorySerializer,
    ResourceSerializer,
    SolutionSerializer,
    UserSelectionSerializer,
)

if TYPE_CHECKING:
    from django.db.models.query import QuerySet


class CategorySearchFilter(SearchFilter):
    search_param = "category"
    search_description = "Category name"


class ListSolutionAPIView(ListAPIView):
    """get: List all solutions.

    List all solutions.
    You can also apply filter and sorting to customize the results. For example,
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
    You can also apply filter to customize the results. For example,
    - To filter the resources by resources type news: \
        /resources/<solution_id>/?type=news
    """

    serializer_class = ResourceSerializer
    lookup_url_kwarg = "solution_id"
    filter_backends = [ResourceTypeSearchFilter]
    search_fields = ["=resource_type"]

    def get_queryset(self):
        solution_id = self.kwargs.get(self.lookup_url_kwarg)
        target_solution = get_object_or_404(Solution, id=solution_id)
        return Resource.objects.filter(solution=target_solution).order_by("id")


class ToggleSelectSolution(GenericAPIView):
    """Toggle select a solution.

    Toggle select a solution for the logged-in user by solution ID.
    """

    queryset = Solution.objects.all()
    lookup_url_kwarg = "solution_id"
    serializer_class = UserSelectionSerializer

    def post(self, request, *args, **kwargs):
        user_selection, _ = UserSelection.objects.get_or_create(user=self.request.user)
        solution = self.get_object()
        selected_solutions = user_selection.selected_solutions
        self.toggle_select_solution(selected_solutions, solution)

        serializer = self.get_serializer(user_selection)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def toggle_select_solution(
        self, selected_solutions: QuerySet[Solution], solution: Solution
    ):
        if solution in selected_solutions.all():
            selected_solutions.remove(solution)
            return

        selected_same_category = selected_solutions.filter(category=solution.category)
        if solution.selection_logic == self.selection_logic_exclusive:
            selected_solutions.remove(*list(selected_same_category))
        elif solution.selection_logic == self.selection_logic_no_car:
            selected_solutions.remove(*list(selected_solutions.filter(name="No Car")))
        elif solution.selection_logic == self.selection_logic_electric_car:
            selected_solutions.remove(
                *list(selected_solutions.filter(name="Electric Car"))
            )

        selected_same_category_exclusive = selected_same_category.filter(
            selection_logic=self.selection_logic_exclusive
        )
        selected_solutions.remove(*list(selected_same_category_exclusive))

        selected_solutions.add(solution)

    @property
    def selection_logic_exclusive(self):
        try:
            return SelectionLogic.objects.get(
                description="If selected, others solutions in category are deselected"
            )
        except SelectionLogic.DoesNotExist:
            return None

    @property
    def selection_logic_no_car(self):
        try:
            return SelectionLogic.objects.get(
                description='If selected, "No Car" is deselected'
            )
        except SelectionLogic.DoesNotExist:
            return None

    @property
    def selection_logic_electric_car(self):
        try:
            return SelectionLogic.objects.get(
                description='If selected, "Electric Car" is deselected'
            )
        except SelectionLogic.DoesNotExist:
            return None


class ListUserSelectionAPIView(ListAPIView):
    """get: List all user selections.

    List all user selections. Only admin users can perform this operation.
    """

    queryset = UserSelection.objects.all().order_by("-created")
    serializer_class = UserSelectionSerializer
    permission_classes = [IsAdminUser]


class RetrieveDestroyUserSelectionAPIView(RetrieveDestroyAPIView):
    """get: Retrieve the user selections.

    Retrieve the user selections of the logged-in user. \
    If the user selections doesn't exist, create one.

    delete: Delete the user selections.

    Delete the user selections of the logged-in user.
    """

    serializer_class = UserSelectionSerializer

    def get_object(self):
        return get_object_or_404(UserSelection, user=self.request.user)

    def retrieve(self, request, *args, **kwargs):
        instance, _ = UserSelection.objects.get_or_create(user=self.request.user)
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
