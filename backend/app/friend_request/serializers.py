from friend_request.models import FriendRequest
from rest_framework import serializers
from user.serializers import UserSerializer


class FriendRequestSerializer(serializers.ModelSerializer):
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation["requester"] = UserSerializer(instance.requester).data
        representation["receiver"] = UserSerializer(instance.receiver).data
        return representation

    class Meta:
        model = FriendRequest
        fields = "__all__"
        read_only_fields = ["requester", "receiver"]
