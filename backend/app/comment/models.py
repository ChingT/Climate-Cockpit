from django.contrib.auth import get_user_model
from django.db import models
from post.models import Post

User = get_user_model()


class Comment(models.Model):
    post = models.ForeignKey(Post, related_name="comments", on_delete=models.CASCADE)
    user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name="comments")
    created = models.DateTimeField(auto_now_add=True)
    comment = models.TextField()

    def __str__(self):
        max_length = 30
        content = (
            f"{self.content[:max_length]}..."
            if len(self.content) > max_length
            else self.content
        )
        return f"Comment {self.pk} by {self.user.username}: {content}"
