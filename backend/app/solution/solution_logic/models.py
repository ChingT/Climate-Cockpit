from django.db import models
from django_extensions.db.models import TimeStampedModel
from solution.solutions.models import Solution


class SelectionRule(models.Model):
    description = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.description


class DashboardGroup(models.Model):
    name = models.CharField(max_length=100)
    subgroup_name = models.CharField(max_length=100)

    class Meta:
        unique_together = ["name", "subgroup_name"]

    def __str__(self):
        return f"{self.name} - {self.subgroup_name}"


class DashboardItem(TimeStampedModel):
    name = models.CharField(max_length=100, unique=True)
    initial_amount = models.IntegerField()
    group = models.ForeignKey(
        DashboardGroup, models.PROTECT, related_name="dashboard_icons"
    )
    icon_name_initial = models.CharField(max_length=255, blank=True)
    icon_name_altered = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.name


class SolutionLogic(models.Model):
    class ImpactTypeChoices(models.TextChoices):
        REDUCTION = "reduction", "reduction"
        ADDITION = "addition", "addition"

    solution = models.OneToOneField(
        Solution, models.CASCADE, related_name="solution_logic"
    )
    selection_rule = models.ForeignKey(
        SelectionRule, models.PROTECT, related_name="solution_logics"
    )
    impact_detail = models.JSONField(max_length=30, default=dict, blank=True, null=True)
    impact_type = models.CharField(
        max_length=20,
        choices=ImpactTypeChoices.choices,
        help_text=f"Select from {ImpactTypeChoices.choices}",
        blank=True,
    )

    def __str__(self):
        return f"Solution logic for {self.solution.name}"
