from django.shortcuts import render
from rest_framework import generics
from .models import Product, CustomerReview
from .serializers import ProductSerializer, CustomerReviewSerializer

class ProductView(generics.ListAPIView):
  queryset = Product.objects.all()
  serializer_class = ProductSerializer

class CustomerReviewView(generics.ListAPIView):
  queryset = CustomerReview.objects.all()
  serializer_class = CustomerReviewSerializer