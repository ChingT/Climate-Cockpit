from django.db import models
from django_extensions.db.models import TimeStampedModel


class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f"Category {self.name}"


class Solution(TimeStampedModel):
    name = models.CharField(max_length=255)
    category = models.ForeignKey(Category, models.PROTECT, related_name="solutions")
    impact = models.FloatField(blank=True, null=True)
    text = models.TextField()
    text_source = models.URLField(blank=True)
    progress = models.FloatField(blank=True, null=True)
    progress_text = models.TextField()
    progress_source = models.URLField(blank=True)
    button_text = models.CharField(max_length=255)
    icon = models.ImageField(upload_to="solution_icon", blank=True, null=True)

    def __str__(self):
        return f"Solution {self.name}"


class Resource(models.Model):
    class TypeChoices(models.TextChoices):
        VIDEOS = "videos", "videos"
        NEWS = "news", "news"
        BOOKS = "books", "books"

    DEFAULT_TYPE = TypeChoices.VIDEOS

    solution = models.ForeignKey(Category, models.CASCADE, related_name="resources")
    title = models.CharField(max_length=300)
    source = models.CharField(max_length=100)
    link = models.URLField()
    resource_type = models.CharField(
        max_length=10,
        choices=TypeChoices.choices,
        default=DEFAULT_TYPE,
        help_text=f"Select from {TypeChoices.labels}",
    )

    def __str__(self):
        return f"Category {self.name}"
