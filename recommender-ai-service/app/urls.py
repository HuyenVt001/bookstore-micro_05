from django.urls import path
from .views import RecommendationListCreate, RecommendationDetail, CustomerRecommendations

urlpatterns = [
    path('recommendations/', RecommendationListCreate.as_view()),
    path('recommendations/<int:recommendation_id>/', RecommendationDetail.as_view()),
    path('customers/<int:customer_id>/recommendations/', CustomerRecommendations.as_view()),
]
