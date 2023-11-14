from rest_framework import serializers
from .models import Product, CustomerReview
	
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
      model = Product
      fields = ('id', 'image', 'title', 'author', 'price', 'availability', 'rating', 'category')

class CustomerReviewSerializer(serializers.ModelSerializer):
    class Meta:
      model = CustomerReview
      fields = ('id', 'user_image', 'user_name', 'user_status', 'comment', 'rating')