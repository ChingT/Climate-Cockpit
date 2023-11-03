import secrets
import string


def code_generator(length=5, characters=string.digits):
    """Generate a random code."""
    return "".join(secrets.choice(characters) for _ in range(length))
