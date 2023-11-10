import csv
from pathlib import Path

from django.apps import AppConfig
from rest_framework.generics import get_object_or_404


def populate_solutions(apps: AppConfig, schema_editor):
    Category = apps.get_model("solution", "Category")  # noqa: N806
    Solution = apps.get_model("solution", "Solution")  # noqa: N806

    csv_file_path = Path("fixtures/source/solutions_content.csv")
    with Path.open(csv_file_path, encoding="utf-8") as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            data = dict(**row)
            data["category"], _ = Category.objects.get_or_create(name=data["category"])
            for field_name in row:
                if not data[field_name]:
                    del data[field_name]

            Solution.objects.create(**data)


def populate_resources(apps: AppConfig, schema_editor):
    Solution = apps.get_model("solution", "Solution")  # noqa: N806
    Resource = apps.get_model("solution", "Resource")  # noqa: N806

    resources_types = ["videos", "news", "books", "papers"]
    for resources_type in resources_types:
        csv_file_path = Path("fixtures/source/resource") / f"{resources_type}.csv"
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
