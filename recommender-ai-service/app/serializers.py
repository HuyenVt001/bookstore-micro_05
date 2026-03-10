from rest_framework import serializers
from .models import Recommendation

class RecommendationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recommendation
        fields = ['id', 'customer_id', 'recommended_book_ids', 'reason', 'created_at', 'updated_at']
