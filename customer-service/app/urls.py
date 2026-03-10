from django.urls import path
from .views import CustomerListCreate, CustomerDetail

urlpatterns = [
    path('customers/', CustomerListCreate.as_view()),
    path('customers/<int:customer_id>/', CustomerDetail.as_view()),
]