from rest_framework import serializers

from .models import Category, Resource, Solution


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class SolutionSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    number_of_supporters = serializers.SerializerMethodField()

    def get_number_of_supporters(self, instance: Solution):
        # TODO(ching): fix this  # noqa: TD003
        pass

    class Meta:
        model = Solution
        fields = "__all__"


class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = "__all__"
