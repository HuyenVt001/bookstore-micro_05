from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Recommendation
from .serializers import RecommendationSerializer

class RecommendationListCreate(APIView):
    def get(self, request):
        recommendations = Recommendation.objects.all()
        serializer = RecommendationSerializer(recommendations, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = RecommendationSerializer(data=request.data)
        if serializer.is_valid():
            recommendation = serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RecommendationDetail(APIView):
    def get(self, request, recommendation_id):
        try:
            recommendation = Recommendation.objects.get(id=recommendation_id)
            serializer = RecommendationSerializer(recommendation)
            return Response(serializer.data)
        except Recommendation.DoesNotExist:
            return Response({'error': 'Recommendation not found'}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, recommendation_id):
        try:
            recommendation = Recommendation.objects.get(id=recommendation_id)
            serializer = RecommendationSerializer(recommendation, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Recommendation.DoesNotExist:
            return Response({'error': 'Recommendation not found'}, status=status.HTTP_404_NOT_FOUND)

class CustomerRecommendations(APIView):
    def get(self, request, customer_id):
        try:
            recommendation = Recommendation.objects.get(customer_id=customer_id)
            serializer = RecommendationSerializer(recommendation)
            return Response(serializer.data)
        except Recommendation.DoesNotExist:
            return Response(
                {'recommended_book_ids': [], 'reason': 'No recommendations yet'},
                status=status.HTTP_200_OK
            )

    def post(self, request, customer_id):
        try:
            recommendation = Recommendation.objects.get(customer_id=customer_id)
            recommendation.delete()
        except Recommendation.DoesNotExist:
            pass
        
        new_recommendation = Recommendation.objects.create(
            customer_id=customer_id,
            recommended_book_ids=request.data.get('recommended_book_ids', []),
            reason=request.data.get('reason', '')
        )
        serializer = RecommendationSerializer(new_recommendation)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
