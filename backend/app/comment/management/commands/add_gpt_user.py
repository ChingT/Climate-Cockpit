from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand

User = get_user_model()


class Command(BaseCommand):
    help = "Create a GPT user in the database"  # noqa: A003

    def handle(self, *args, **options):
        gpt_user, created = User.objects.get_or_create(
            username="gpt_bot3", defaults={"is_active": False}
        )

        if created:
            gpt_user.email = "gpt_bot3@example.com"
            gpt_user.is_staff = False
            gpt_user.is_superuser = False
            gpt_user.set_unusable_password()
            gpt_user.save()
            self.stdout.write(
                self.style.SUCCESS(f"GPT user created: {gpt_user.username}")
            )
        else:
            self.stdout.write(
                self.style.WARNING(f"GPT user already exists: {gpt_user.username}")
            )
