from rest_framework import serializers

from .models import Category, Resource, Solution


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class SolutionSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    number_of_supporters = serializers.SerializerMethodField()
    selected_by_logged_in_user = serializers.SerializerMethodField()

    def get_number_of_supporters(self, instance: Solution):
        return instance.scorecards.count()

    def get_selected_by_logged_in_user(self, instance: Solution):
        return instance.scorecards.filter(user=self.context["request"].user).exists()

    class Meta:
        model = Solution
        fields = "__all__"


class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = "__all__"
