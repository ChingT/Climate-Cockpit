from django.contrib import admin

from .models import Category, Resource, Solution

admin.site.register(Category)
admin.site.register(Solution)
admin.site.register(Resource)
