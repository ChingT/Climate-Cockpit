from django.db import models
from solution.solutions.models import Solution


class SelectionRule(models.Model):
    description = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.description


class SolutionLogic(models.Model):
    solution = models.OneToOneField(
        Solution, models.CASCADE, related_name="solution_logic"
    )
    selection_rule = models.ForeignKey(
        SelectionRule, models.PROTECT, related_name="solution_logics"
    )

    def __str__(self):
        return f"Solution logic for {self.solution.name}"
