from django.contrib import admin

from .models import Category, Resource, SelectionLogic, Solution, UserSelection

admin.site.register(Category)
admin.site.register(SelectionLogic)
admin.site.register(Solution)
admin.site.register(UserSelection)
admin.site.register(Resource)
