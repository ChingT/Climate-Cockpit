from rest_framework.filters import SearchFilter

from .models import Resource


class CategorySearchFilter(SearchFilter):
    search_param = "category"
    search_description = "Category name"


class ResourceTypeSearchFilter(SearchFilter):
    search_param = "type"
    search_description = f"Select from {Resource.TypeChoices.labels}"
