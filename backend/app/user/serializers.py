from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    logged_in_user_is_following = serializers.SerializerMethodField()
    logged_in_user_is_friends = serializers.SerializerMethodField()
    logged_in_user_is_rejected = serializers.SerializerMethodField()
    logged_in_user_received_fr = serializers.SerializerMethodField()
    logged_in_user_sent_fr = serializers.SerializerMethodField()
    amount_of_posts = serializers.SerializerMethodField()
    amount_of_likes = serializers.SerializerMethodField()
    amount_of_friends = serializers.SerializerMethodField()
    amount_of_followers = serializers.SerializerMethodField()
    amount_following = serializers.SerializerMethodField()

    def get_logged_in_user_is_following(self, instance):
        current_user = self.context["request"].user
        return instance.followers.filter(id=current_user.id).exists()

    def get_logged_in_user_is_friends(self, instance):
        pass

    def get_logged_in_user_is_rejected(self, instance):
        pass

    def get_logged_in_user_received_fr(self, instance):
        pass

    def get_logged_in_user_sent_fr(self, instance):
        pass

    def get_amount_of_posts(self, instance):
        pass

    def get_amount_of_likes(self, instance):
        pass

    def get_amount_of_friends(self, instance):
        pass

    def get_amount_of_followers(self, instance):
        return instance.followers.count()

    def get_amount_following(self, instance):
        return instance.followees.count()

    class Meta:
        model = User
        fields = [
            "id",
            "email",
            "first_name",
            "last_name",
            "username",
            "avatar",
            "banner",
            "location",
            "about_me",
            "logged_in_user_is_following",
            "logged_in_user_is_friends",
            "logged_in_user_is_rejected",
            "logged_in_user_received_fr",
            "logged_in_user_sent_fr",
            "amount_of_posts",
            "amount_of_likes",
            "amount_of_friends",
            "amount_of_followers",
            "amount_following",
        ]


class BasicUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "first_name", "last_name", "username", "avatar"]
