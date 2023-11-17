from comment.models import Comment
from rest_framework import serializers
from user.serializers import UserSerializer


class CommentSerializer(serializers.ModelSerializer):
    is_from_logged_in_user = serializers.SerializerMethodField()
    user = UserSerializer(read_only=True)

    def get_is_from_logged_in_user(self, instance):
        user = self.context["request"].user
        return instance.user == user

    class Meta:
        model = Comment
        fields = [
            "id",
            "post",
            "user",
            "content",
            "created",
            "modified",
            "is_from_logged_in_user",
        ]
        read_only_fields = ["post"]
