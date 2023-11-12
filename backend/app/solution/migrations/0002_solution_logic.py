# Generated by Django 4.2.7 on 2023-11-12 14:27

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("solution", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="SelectionRule",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("description", models.CharField(max_length=255, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name="SolutionLogic",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "selection_rule",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.PROTECT,
                        related_name="solution_logics",
                        to="solution.selectionrule",
                    ),
                ),
                (
                    "solution",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="solution_logic",
                        to="solution.solution",
                    ),
                ),
            ],
        ),
    ]
