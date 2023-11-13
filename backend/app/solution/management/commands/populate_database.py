import csv
import json
from pathlib import Path

from django.core.management.base import BaseCommand
from rest_framework.generics import get_object_or_404
from solution.solution_logic.models import SelectionRule, SolutionLogic
from solution.solutions.models import Category, Resource, Solution

source_root = Path("solution/management/commands/source")


class Command(BaseCommand):
    help = "Import solution data from CSV files."  # noqa: A003

    def handle(self, *args, **options):
        populate_solutions()
        self.stdout.write(self.style.SUCCESS("Successfully imported solution data"))

        populate_resources()
        self.stdout.write(self.style.SUCCESS("Successfully imported resource data"))

        populate_solution_logics()
        self.stdout.write(
            self.style.SUCCESS("Successfully imported solution_logics data")
        )


def populate_solutions():
    csv_file_path = source_root / "solution_content.csv"
    with Path.open(csv_file_path, encoding="utf-8") as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            data = dict(**row)
            data["category"], _ = Category.objects.get_or_create(name=data["category"])

            for field_name in row:
                if not data[field_name]:
                    del data[field_name]

            Solution.objects.create(**data)


def populate_resources():
    resources_types = ["videos", "news", "books", "papers"]
    for resources_type in resources_types:
        csv_file_path = source_root / f"resource/{resources_type}.csv"
        with Path.open(csv_file_path, encoding="utf-8") as csv_file:
            csv_reader = csv.DictReader(csv_file)
            for row in csv_reader:
                data = dict(**row)
                for field_name in row:
                    if not data[field_name]:
                        del data[field_name]

                data["solution"] = get_object_or_404(Solution, name=data["solution"])
                data["resource_type"] = resources_type
                Resource.objects.create(**data)


def populate_solution_logics():
    csv_file_path = source_root / "solution_logic.csv"
    with Path.open(csv_file_path, encoding="utf-8") as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            data = dict(**row)
            for field_name in row:
                if not data[field_name]:
                    del data[field_name]

            data["solution"] = get_object_or_404(Solution, name=data["solution"])
            data["selection_rule"], _ = SelectionRule.objects.get_or_create(
                description=data["selection_rule"]
            )
            if "impact_detail" in data:
                data["impact_detail"] = json.loads(data["impact_detail"])

            SolutionLogic.objects.create(**data)
