# Generated by Django 4.2.7 on 2023-11-07 15:13

from django.db import migrations, models
import django.db.models.deletion
import django_extensions.db.fields

from fixtures.load_data import populate_solution


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Category",
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
                ("name", models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name="Solution",
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
                    "created",
                    django_extensions.db.fields.CreationDateTimeField(
                        auto_now_add=True, verbose_name="created"
                    ),
                ),
                (
                    "modified",
                    django_extensions.db.fields.ModificationDateTimeField(
                        auto_now=True, verbose_name="modified"
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("impact", models.FloatField(blank=True, null=True)),
                ("text", models.TextField()),
                ("text_source", models.URLField(blank=True)),
                ("progress", models.FloatField(blank=True, null=True)),
                ("progress_text", models.TextField()),
                ("progress_source", models.URLField(blank=True)),
                ("button_text", models.CharField(max_length=255)),
                (
                    "icon",
                    models.ImageField(blank=True, null=True, upload_to="solution_icon"),
                ),
                (
                    "category",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.PROTECT,
                        related_name="solutions",
                        to="solution.category",
                    ),
                ),
            ],
            options={
                "get_latest_by": "modified",
                "abstract": False,
            },
        ),
        migrations.CreateModel(
            name="Resource",
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
                ("title", models.CharField(max_length=300)),
                ("source", models.CharField(max_length=100)),
                ("link", models.URLField()),
                (
                    "resource_type",
                    models.CharField(
                        choices=[
                            ("videos", "videos"),
                            ("news", "news"),
                            ("books", "books"),
                        ],
                        default="videos",
                        help_text="Select from ['videos', 'news', 'books']",
                        max_length=10,
                    ),
                ),
                (
                    "solution",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="resources",
                        to="solution.category",
                    ),
                ),
            ],
        ),
    ]
