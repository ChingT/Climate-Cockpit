from django.contrib.auth import get_user_model
from django.db import models
from django.db.models import Q
from django_extensions.db.models import TimeStampedModel

User = get_user_model()


class FriendRequest(TimeStampedModel):
    STATUS_CHOICES = (
        ("P", "Pending"),
        ("A", "Accepted"),
        ("R", "Rejected"),
    )
    DEFAULT_STATUS = "P"

    requester = models.ForeignKey(
        User, models.CASCADE, related_name="friend_requests_sent"
    )
    receiver = models.ForeignKey(
        User, models.CASCADE, related_name="friend_requests_received"
    )
    status = models.CharField(max_length=1, choices=STATUS_CHOICES, default="P")

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["requester", "receiver"],
                name="unique_requester_receiver",
            )
        ]

    def __str__(self):
        return (
            f"FriendRequest from {self.requester} to {self.receiver} "
            f"({self.get_status_display()})"
        )


def get_friends(user):
    # Filter the accepted friend requests where the current user is involved.
    accepted_friend_requests = FriendRequest.objects.filter(
        Q(requester=user) | Q(receiver=user), status="A"
    )
    friends = User.objects.filter(
        Q(friend_requests_sent__in=accepted_friend_requests)
        | Q(friend_requests_received__in=accepted_friend_requests)
    )
    return friends.exclude(id=user.id).distinct()


def is_friend(user_1, user_2):
    return get_friends(user_1).filter(id=user_2.id).exists()
