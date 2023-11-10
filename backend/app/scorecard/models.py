from django.contrib.auth import get_user_model
from django.db import models
from django_extensions.db.models import TimeStampedModel
from solution.models import Solution

User = get_user_model()


class Scorecard(TimeStampedModel):
    user = models.OneToOneField(User, models.CASCADE, related_name="scorecard")
    selected_solutions = models.ManyToManyField(
        Solution, related_name="scorecards", blank=True
    )

    def __str__(self):
        return f"Scorecard of {self.user}"
