from django.contrib.auth import get_user_model
from django.db.models import Max, Sum
from rest_framework import serializers
from utils import generate_aggregate

from .models import Category, Resource, Solution, UserSelection

User = get_user_model()


class CategorySerializer(serializers.ModelSerializer):
    impact_from_user = serializers.SerializerMethodField()
    level_from_user = serializers.SerializerMethodField()
    solution_names = serializers.SerializerMethodField()

    def get_impact_from_user(self, instance: Category):
        return generate_aggregate(self.get_selected_solutions(instance), Sum("impact"))

    def get_level_from_user(self, instance: Category):
        return generate_aggregate(self.get_selected_solutions(instance), Max("level"))

    def get_solution_names(self, instance: Category):
        return instance.solutions.values_list("name", flat=True)

    class Meta:
        model = Category
        fields = "__all__"

    def get_selected_solutions(self, instance: Category):
        user = self.context["user"]
        if user.is_authenticated:
            selected_solutions = user.user_selections.selected_solutions
            return selected_solutions.filter(category=instance)
        return Solution.objects.none()


class SolutionSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    number_of_supporters = serializers.SerializerMethodField()
    selected_by_logged_in_user = serializers.SerializerMethodField()

    def get_number_of_supporters(self, instance: Solution):
        return instance.user_selections.count()

    def get_selected_by_logged_in_user(self, instance: Solution):
        current_user = self.context["request"].user
        if current_user.is_authenticated:
            return instance.user_selections.filter(user=current_user).exists()
        return False

    class Meta:
        model = Solution
        fields = "__all__"


class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = "__all__"


class UserSelectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSelection
        fields = ["user", "selected_solutions"]
        read_only_fields = ["user", "selected_solutions"]
