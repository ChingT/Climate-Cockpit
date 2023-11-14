from django.contrib import admin

from .solution_logic.models import SelectionRule
from .solutions.models import Category, Resource, Solution, UserSelection

admin.site.register(Category)
admin.site.register(Solution)
admin.site.register(UserSelection)
admin.site.register(Resource)

admin.site.register(SelectionRule)
