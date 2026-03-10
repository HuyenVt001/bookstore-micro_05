from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import requests
from .models import Order
from .serializers import OrderSerializer

PAY_SERVICE_URL = "http://pay-service:8000"
SHIP_SERVICE_URL = "http://ship-service:8000"

class OrderListCreate(APIView):
    def get(self, request):
        orders = Order.objects.all()
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            order = serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class OrderDetail(APIView):
    def get(self, request, order_id):
        try:
            order = Order.objects.get(id=order_id)
            serializer = OrderSerializer(order)
            return Response(serializer.data)
        except Order.DoesNotExist:
            return Response({'error': 'Order not found'}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, order_id):
        try:
            order = Order.objects.get(id=order_id)
            serializer = OrderSerializer(order, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Order.DoesNotExist:
            return Response({'error': 'Order not found'}, status=status.HTTP_404_NOT_FOUND)

class OrderPayment(APIView):
    def post(self, request, order_id):
        try:
            order = Order.objects.get(id=order_id)
            payment_data = {
                'order_id': order.id,
                'customer_id': order.customer_id,
                'amount': str(order.total_amount),
                'method': request.data.get('method', 'credit_card')
            }
            response = requests.post(f"{PAY_SERVICE_URL}/payments/", json=payment_data)
            if response.status_code == 201:
                order.status = 'processing'
                order.payment_method = payment_data['method']
                order.save()
                return Response({'message': 'Payment initiated', 'order': OrderSerializer(order).data})
            return Response({'error': 'Payment failed'}, status=status.HTTP_400_BAD_REQUEST)
        except Order.DoesNotExist:
            return Response({'error': 'Order not found'}, status=status.HTTP_404_NOT_FOUND)

class OrderShipping(APIView):
    def post(self, request, order_id):
        try:
            order = Order.objects.get(id=order_id)
            shipping_data = {
                'order_id': order.id,
                'customer_id': order.customer_id,
                'address': request.data.get('address', order.shipping_address)
            }
            response = requests.post(f"{SHIP_SERVICE_URL}/shipments/", json=shipping_data)
            if response.status_code == 201:
                order.status = 'shipped'
                order.shipping_address = shipping_data['address']
                order.save()
                return Response({'message': 'Shipment created', 'order': OrderSerializer(order).data})
            return Response({'error': 'Shipping failed'}, status=status.HTTP_400_BAD_REQUEST)
        except Order.DoesNotExist:
            return Response({'error': 'Order not found'}, status=status.HTTP_404_NOT_FOUND)
