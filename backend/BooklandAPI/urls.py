from django.urls import path
from .views import ProductView, CustomerReviewView

urlpatterns = [
  path('products', ProductView.as_view()),
  path('review', CustomerReviewView.as_view())
]