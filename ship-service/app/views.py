from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import uuid
from .models import Shipment
from .serializers import ShipmentSerializer

class ShipmentListCreate(APIView):
    def get(self, request):
        shipments = Shipment.objects.all()
        serializer = ShipmentSerializer(shipments, many=True)
        return Response(serializer.data)

    def post(self, request):
        request.data._mutable = True
        request.data['tracking_number'] = str(uuid.uuid4())
        serializer = ShipmentSerializer(data=request.data)
        if serializer.is_valid():
            shipment = serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ShipmentDetail(APIView):
    def get(self, request, shipment_id):
        try:
            shipment = Shipment.objects.get(id=shipment_id)
            serializer = ShipmentSerializer(shipment)
            return Response(serializer.data)
        except Shipment.DoesNotExist:
            return Response({'error': 'Shipment not found'}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, shipment_id):
        try:
            shipment = Shipment.objects.get(id=shipment_id)
            serializer = ShipmentSerializer(shipment, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Shipment.DoesNotExist:
            return Response({'error': 'Shipment not found'}, status=status.HTTP_404_NOT_FOUND)
