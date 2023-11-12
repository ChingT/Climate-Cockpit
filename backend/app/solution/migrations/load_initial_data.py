from django.db import migrations
from fixtures.load_data import (
    populate_resources,
    populate_solution_logics,
    populate_solutions,
)


class Migration(migrations.Migration):
    initial = True

    dependencies = [("solution", "0001_initial"), ("solution", "0002_solution_logic")]

    operations = [
        migrations.RunPython(populate_solutions),
        migrations.RunPython(populate_resources),
        migrations.RunPython(populate_solution_logics),
    ]
