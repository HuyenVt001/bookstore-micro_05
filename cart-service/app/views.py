from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Cart, CartItem
from .serializers import CartSerializer, CartItemSerializer

class CartListCreate(APIView):
    def post(self, request):
        customer_id = request.data.get('customer_id')
        if not customer_id:
            return Response({'error': 'customer_id is required'}, status=status.HTTP_400_BAD_REQUEST)
        
        cart, created = Cart.objects.get_or_create(customer_id=customer_id)
        serializer = CartSerializer(cart)
        status_code = status.HTTP_201_CREATED if created else status.HTTP_200_OK
        return Response(serializer.data, status=status_code)

class CartDetail(APIView):
    def get(self, request, customer_id):
        try:
            cart = Cart.objects.get(customer_id=customer_id)
            serializer = CartSerializer(cart)
            return Response(serializer.data)
        except Cart.DoesNotExist:
            return Response({'error': 'Cart not found'}, status=status.HTTP_404_NOT_FOUND)

class AddToCart(APIView):
    def post(self, request, customer_id):
        try:
            cart = Cart.objects.get(customer_id=customer_id)
            book_id = request.data.get('book_id')
            quantity = request.data.get('quantity', 1)
            price = request.data.get('price')
            
            if not book_id or not price:
                return Response({'error': 'book_id and price are required'}, 
                              status=status.HTTP_400_BAD_REQUEST)
            
            cart_item, created = CartItem.objects.get_or_create(
                cart=cart,
                book_id=book_id,
                defaults={'quantity': quantity, 'price': price}
            )
            
            if not created:
                cart_item.quantity += quantity
                cart_item.save()
            
            cart.total_price = sum(
                item.quantity * item.price for item in cart.items.all()
            )
            cart.save()
            
            serializer = CartSerializer(cart)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Cart.DoesNotExist:
            return Response({'error': 'Cart not found'}, status=status.HTTP_404_NOT_FOUND)

class UpdateCartItem(APIView):
    def put(self, request, customer_id, item_id):
        try:
            cart = Cart.objects.get(customer_id=customer_id)
            cart_item = CartItem.objects.get(id=item_id, cart=cart)
            
            quantity = request.data.get('quantity')
            if quantity:
                cart_item.quantity = quantity
                cart_item.save()
            
            cart.total_price = sum(
                item.quantity * item.price for item in cart.items.all()
            )
            cart.save()
            
            serializer = CartSerializer(cart)
            return Response(serializer.data)
        except (Cart.DoesNotExist, CartItem.DoesNotExist):
            return Response({'error': 'Cart or item not found'}, status=status.HTTP_404_NOT_FOUND)

class RemoveFromCart(APIView):
    def delete(self, request, customer_id, item_id):
        try:
            cart = Cart.objects.get(customer_id=customer_id)
            cart_item = CartItem.objects.get(id=item_id, cart=cart)
            cart_item.delete()
            
            cart.total_price = sum(
                item.quantity * item.price for item in cart.items.all()
            )
            cart.save()
            
            serializer = CartSerializer(cart)
            return Response(serializer.data)
        except (Cart.DoesNotExist, CartItem.DoesNotExist):
            return Response({'error': 'Cart or item not found'}, status=status.HTTP_404_NOT_FOUND)

class ClearCart(APIView):
    def delete(self, request, customer_id):
        try:
            cart = Cart.objects.get(customer_id=customer_id)
            cart.items.all().delete()
            cart.total_price = 0
            cart.save()
            serializer = CartSerializer(cart)
            return Response(serializer.data)
        except Cart.DoesNotExist:
            return Response({'error': 'Cart not found'}, status=status.HTTP_404_NOT_FOUND)
