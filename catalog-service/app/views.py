from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Catalog
from .serializers import CatalogSerializer

class CatalogListCreate(APIView):
    def get(self, request):
        catalogs = Catalog.objects.all()
        serializer = CatalogSerializer(catalogs, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CatalogSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CatalogDetail(APIView):
    def get(self, request, catalog_id):
        try:
            catalog = Catalog.objects.get(id=catalog_id)
            serializer = CatalogSerializer(catalog)
            return Response(serializer.data)
        except Catalog.DoesNotExist:
            return Response({'error': 'Catalog not found'}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, catalog_id):
        try:
            catalog = Catalog.objects.get(id=catalog_id)
            serializer = CatalogSerializer(catalog, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Catalog.DoesNotExist:
            return Response({'error': 'Catalog not found'}, status=status.HTTP_404_NOT_FOUND)
