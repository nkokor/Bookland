from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

class Product(models.Model):
  image = models.CharField(max_length=150)
  title = models.CharField(max_length=100)
  author = models.CharField(max_length=30)
  price = models.FloatField()
  availability = models.IntegerField()
  rating = models.IntegerField(default=0)
  number_of_ratings = models.IntegerField(default=0)
  category = models.CharField(max_length=50)


class CustomerReview(models.Model):
  #user_name, user_image and user_status will be deleted and user_id will be added when user model is created
  user_name = models.CharField(max_length=20)
  user_image = models.CharField(max_length=50)
  user_status = models.CharField(max_length=20)
  comment = models.CharField(max_length=250)
  rating = models.IntegerField(default=1, validators=[MaxValueValidator(5), MinValueValidator(1)])