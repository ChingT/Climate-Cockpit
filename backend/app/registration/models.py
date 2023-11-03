import secrets
import string

from django.contrib.auth import get_user_model
from django.db import models
from django_extensions.db.models import TimeStampedModel

User = get_user_model()


def code_generator(length=5, characters=string.digits):
    """Generate a random code."""
    return "".join(secrets.choice(characters) for _ in range(length))


class Registration(TimeStampedModel):
    """Model for registration profiles.

    Attributes
    ----------
        user (User): The related user.
        code (str): Random code used for registration and password reset.
        code_type (str): Type of the code ("RV" for Registration Validation,
        "PR" for Password Reset).
        code_used (bool): Indicates if the code has been used.
    """

    USER_CHOICES = (("RV", "Registration Validation"), ("PR", "Password Reset"))

    user = models.OneToOneField(
        on_delete=models.CASCADE, related_name="registration", to=User
    )
    code = models.CharField(max_length=15, default=code_generator)
    code_type = models.CharField(max_length=2, choices=USER_CHOICES)
    code_used = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user.email}: {self.code}"
