from friend_request.models import FriendRequest
from rest_framework import serializers
from user.serializers import UserSerializer


class FriendRequestSerializer(serializers.ModelSerializer):
    requester = UserSerializer(read_only=True)
    receiver = UserSerializer(read_only=True)

    class Meta:
        model = FriendRequest
        fields = "__all__"
