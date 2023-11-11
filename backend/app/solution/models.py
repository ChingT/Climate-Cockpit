from django.contrib.auth import get_user_model
from django.db import models
from django_extensions.db.models import TimeStampedModel

User = get_user_model()


class Category(TimeStampedModel):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f"Category: {self.name}"


class SelectionLogic(models.Model):
    description = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.description


class Solution(TimeStampedModel):
    name = models.CharField(max_length=255)
    category = models.ForeignKey(Category, models.PROTECT, related_name="solutions")
    impact = models.FloatField(blank=True, null=True)
    text = models.TextField(
        help_text=(
            "To include impact in text, use: text.replace('{impact}', impact + '%')"
        )
    )
    text_source = models.URLField(max_length=500, blank=True)
    progress = models.FloatField(blank=True, null=True)
    progress_text = models.TextField(
        help_text=(
            "To include progress in progress_text, use: "
            "progress_text.replace('{progress}', progress + '%')"
        )
    )
    progress_source = models.URLField(max_length=500, blank=True)
    button_text = models.CharField(max_length=255)
    icon_name = models.CharField(max_length=255)
    level = models.IntegerField()
    selection_logic = models.ForeignKey(
        SelectionLogic, models.PROTECT, related_name="solutions"
    )

    class Meta:
        unique_together = ["category", "level"]

    def __str__(self):
        return f"Solution: {self.name}"


class UserSelection(TimeStampedModel):
    user = models.OneToOneField(User, models.CASCADE, related_name="user_selections")
    selected_solutions = models.ManyToManyField(
        Solution, related_name="user_selections", blank=True
    )

    def __str__(self):
        return f"UserSelection from {self.user}"


class Resource(TimeStampedModel):
    class TypeChoices(models.TextChoices):
        VIDEOS = "videos", "videos"
        NEWS = "news", "news"
        BOOKS = "books", "books"
        PAPERS = "papers", "papers"

    DEFAULT_TYPE = TypeChoices.VIDEOS

    solution = models.ForeignKey(Solution, models.CASCADE, related_name="resources")
    title = models.CharField(max_length=300)
    source = models.CharField(max_length=100, blank=True)
    author = models.CharField(max_length=100, blank=True)
    url = models.URLField(blank=True)
    resource_type = models.CharField(
        max_length=10,
        choices=TypeChoices.choices,
        default=DEFAULT_TYPE,
        help_text=f"Select from {TypeChoices.labels}",
    )

    def __str__(self):
        return f"Resource: {self.title}"
