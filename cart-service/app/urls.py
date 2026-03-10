from django.urls import path
from .views import (
    CartListCreate, CartDetail, AddToCart, UpdateCartItem, 
    RemoveFromCart, ClearCart
)

urlpatterns = [
    path('carts/', CartListCreate.as_view()),
    path('carts/<int:customer_id>/', CartDetail.as_view()),
    path('carts/<int:customer_id>/add/', AddToCart.as_view()),
    path('carts/<int:customer_id>/items/<int:item_id>/', UpdateCartItem.as_view()),
    path('carts/<int:customer_id>/items/<int:item_id>/remove/', RemoveFromCart.as_view()),
    path('carts/<int:customer_id>/clear/', ClearCart.as_view()),
]
