from django.urls import path
from .views import CatalogListCreate, CatalogDetail

urlpatterns = [
    path('catalogs/', CatalogListCreate.as_view()),
    path('catalogs/<int:catalog_id>/', CatalogDetail.as_view()),
]
