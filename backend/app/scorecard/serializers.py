from rest_framework import serializers

from .models import Scorecard


class ScorecardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Scorecard
        fields = ["user", "selected_solutions"]
        read_only_fields = ["user", "selected_solutions"]
