from comment.models import Comment
from rest_framework import serializers


class CommentSerializer(serializers.ModelSerializer):
    is_from_logged_in_user = serializers.SerializerMethodField()

    def get_is_from_logged_in_user(self, instance):
        user = self.context["request"].user
        return instance.user == user

    class Meta:
        model = Comment
        fields = "__all__"
        read_only_fields = ["post", "user"]
