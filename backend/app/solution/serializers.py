from rest_framework import serializers

from .models import Category, Resource, Solution


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name"]


class SolutionSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    number_of_supporters = serializers.SerializerMethodField()

    def get_number_of_supporters(self, instance: Solution):
        # TODO(ching): fix this  # noqa: TD003
        pass

    class Meta:
        model = Solution
        fields = [
            "id",
            "name",
            "category",
            "impact",
            "text",
            "text_source",
            "progress",
            "progress_text",
            "progress_source",
            "button_text",
            "icon_name",
            "number_of_supporters",
        ]


class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = ["id", "solution", "title", "source", "link", "resource_type"]
