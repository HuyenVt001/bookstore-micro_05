from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Avg
from .models import Rating
from .serializers import RatingSerializer

class RatingListCreate(APIView):
    def get(self, request):
        ratings = Rating.objects.all()
        serializer = RatingSerializer(ratings, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = RatingSerializer(data=request.data)
        if serializer.is_valid():
            rating = serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RatingDetail(APIView):
    def get(self, request, rating_id):
        try:
            rating = Rating.objects.get(id=rating_id)
            serializer = RatingSerializer(rating)
            return Response(serializer.data)
        except Rating.DoesNotExist:
            return Response({'error': 'Rating not found'}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, rating_id):
        try:
            rating = Rating.objects.get(id=rating_id)
            serializer = RatingSerializer(rating, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Rating.DoesNotExist:
            return Response({'error': 'Rating not found'}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, rating_id):
        try:
            rating = Rating.objects.get(id=rating_id)
            rating.delete()
            return Response({'message': 'Rating deleted'}, status=status.HTTP_204_NO_CONTENT)
        except Rating.DoesNotExist:
            return Response({'error': 'Rating not found'}, status=status.HTTP_404_NOT_FOUND)

class BookAverageRating(APIView):
    def get(self, request, book_id):
        avg_rating = Rating.objects.filter(book_id=book_id).aggregate(Avg('rating'))
        rating_count = Rating.objects.filter(book_id=book_id).count()
        return Response({
            'book_id': book_id,
            'average_rating': avg_rating['rating__avg'],
            'count': rating_count
        })
