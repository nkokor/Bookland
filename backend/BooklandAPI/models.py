from django.db import models

# Create your models here.
class Product(models.Model):
  image = models.CharField(max_length=150)
  title = models.CharField(max_length=100)
  author = models.CharField(max_length=30)
  price = models.FloatField()
  availability = models.IntegerField()
  rating = models.IntegerField(default=0)
  number_of_ratings = models.IntegerField(default=0)