from rest_framework import serializers
from .models import Catalog

class CatalogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Catalog
        fields = ['id', 'title', 'description', 'category', 'created_at', 'updated_at']
