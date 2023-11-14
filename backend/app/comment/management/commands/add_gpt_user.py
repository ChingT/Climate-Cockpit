from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand

User = get_user_model()


class Command(BaseCommand):
    help = "Create a GPT user in the database"

    def handle(self, *args, **options):
        # Проверяем, существует ли пользователь GPT, чтобы избежать дублирования
        gpt_user, created = User.objects.get_or_create(
            username="gpt_bot3", defaults={"is_active": False}
        )

        # Если пользователь был создан, устанавливаем дополнительные атрибуты
        if created:
            gpt_user.email = "gpt_bot3@example.com"
            gpt_user.is_staff = False
            gpt_user.is_superuser = False
            gpt_user.set_unusable_password()  # Хорошая практика для нечеловеческих пользователей
            gpt_user.save()
            self.stdout.write(self.style.SUCCESS(f"GPT user created: {gpt_user.username}"))
        else:
            self.stdout.write(self.style.WARNING(f"GPT user already exists: {gpt_user.username}"))
