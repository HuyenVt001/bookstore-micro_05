from django.urls import path
from .views import OrderListCreate, OrderDetail, OrderPayment, OrderShipping

urlpatterns = [
    path('orders/', OrderListCreate.as_view()),
    path('orders/<int:order_id>/', OrderDetail.as_view()),
    path('orders/<int:order_id>/payment/', OrderPayment.as_view()),
    path('orders/<int:order_id>/shipping/', OrderShipping.as_view()),
]
