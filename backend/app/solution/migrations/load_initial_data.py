from django.db import migrations
from fixtures.load_data import populate_resources, populate_solutions


class Migration(migrations.Migration):
    initial = True

    dependencies = [("solution", "0001_initial")]

    operations = [
        migrations.RunPython(populate_solutions),
        migrations.RunPython(populate_resources),
    ]
