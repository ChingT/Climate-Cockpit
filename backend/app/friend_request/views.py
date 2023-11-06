from django.contrib.auth import get_user_model
from django.db.models import Q
from friend_request.models import FriendRequest, get_friends, is_friend
from friend_request.permissions import IsFriendRequestReceiver, IsFriendRequestSender
from friend_request.serializers import FriendRequestSerializer
from rest_framework.exceptions import ValidationError
from rest_framework.generics import (
    CreateAPIView,
    ListAPIView,
    RetrieveUpdateDestroyAPIView,
    get_object_or_404,
)
from rest_framework.permissions import IsAuthenticated
from user.permissions import IsAdmin
from user.serializers import UserSerializer

User = get_user_model()


class ListFriendsView(ListAPIView):
    """List all of logged-in users accepted friends.

    List all of logged-in users accepted friends.
    """

    serializer_class = UserSerializer

    def get_queryset(self):
        return get_friends(self.request.user)


class FriendRequestCreateView(CreateAPIView):
    """Create a new pending friend request.

    Create a new pending friend request.
    """

    serializer_class = FriendRequestSerializer
    lookup_url_kwarg = "user_id"

    def perform_create(self, serializer):
        requester = self.request.user
        user_id = self.kwargs.get(self.lookup_url_kwarg)
        receiver = get_object_or_404(User, id=user_id)

        if requester == receiver:
            msg = "You cannot send a friend request to yourself."
            raise ValidationError(msg)

        if is_friend(requester, receiver):
            msg = "The user is already your friend."
            raise ValidationError(msg)

        friend_requests = FriendRequest.objects.filter(
            Q(requester=requester, receiver=receiver)
            | Q(requester=receiver, receiver=requester)
        )
        if friend_requests.exists():
            msg = "This friend request already exists"
            raise ValidationError(msg)

        serializer.save(
            requester=requester, receiver=receiver, status=FriendRequest.DEFAULT_STATUS
        )


class ListFriendRequestsView(ListAPIView):
    """List all friend requests in which the logged-in user is involved.

    List all friend requests in which the logged-in user is involved.
    """

    serializer_class = FriendRequestSerializer

    def get_queryset(self):
        current_user = self.request.user
        return FriendRequest.objects.filter(
            Q(requester=current_user) | Q(receiver=current_user)
        )


class RetrieveUpdateDestroyFriendRequestView(RetrieveUpdateDestroyAPIView):
    """get: Retrieve a friend request.

    Retrieve a friend request.

    put: Update the status of a friend request.

    Update the status of a friend request.\
    (allowed for the receiver of the friend request)

    patch: Update the status of a friend request partially.

    Update the status of a friend request partially.\
    (allowed for the receiver of the friend request)

    delete: Delete a friend request.

    Delete a friend request.\
    (allowed for the sender of the friend request)
    """

    queryset = FriendRequest.objects.all()
    serializer_class = FriendRequestSerializer
    lookup_url_kwarg = "friend_request_id"

    def get_permissions(self):
        permission_classes = [IsAuthenticated | IsAdmin]
        if self.request.method in ["PUT", "PATCH"]:
            permission_classes += [IsFriendRequestReceiver]
        elif self.request.method in ["DELETE"]:
            permission_classes += [IsFriendRequestSender]
        return [permission() for permission in permission_classes]

    def perform_update(self, serializer):
        if serializer.validated_data["status"] == FriendRequest.DEFAULT_STATUS:
            msg = "You can only modify the status to 'A' or 'R'."
            raise ValidationError(msg)

        instance = self.get_object()
        if instance.status != FriendRequest.DEFAULT_STATUS:
            msg = "You can only modify pending requests."
            raise ValidationError(msg)
        serializer.save()
