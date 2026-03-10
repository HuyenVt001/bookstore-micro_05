from django.urls import path
from .views import StaffListCreate, StaffDetail

urlpatterns = [
    path('staff/', StaffListCreate.as_view()),
    path('staff/<int:staff_id>/', StaffDetail.as_view()),
]
