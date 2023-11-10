from rest_framework import serializers
from solution.serializers import SolutionSerializer

from .models import Scorecard


class ScorecardSerializer(serializers.ModelSerializer):
    selected_solutions = SolutionSerializer(many=True, read_only=True)

    class Meta:
        model = Scorecard
        fields = ["user", "selected_solutions"]
        read_only_fields = ["user"]
