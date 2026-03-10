from django.urls import path
from .views import RatingListCreate, RatingDetail, BookAverageRating

urlpatterns = [
    path('ratings/', RatingListCreate.as_view()),
    path('ratings/<int:rating_id>/', RatingDetail.as_view()),
    path('books/<int:book_id>/average-rating/', BookAverageRating.as_view()),
]
