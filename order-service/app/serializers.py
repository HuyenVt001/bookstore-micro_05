from rest_framework import serializers
from .models import Order

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'customer_id', 'total_amount', 'status', 'payment_method', 'shipping_address', 'created_at', 'updated_at']
