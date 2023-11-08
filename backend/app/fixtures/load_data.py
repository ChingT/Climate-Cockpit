import csv
from pathlib import Path

from django.apps import AppConfig


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
