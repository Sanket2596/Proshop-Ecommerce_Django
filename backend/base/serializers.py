from dataclasses import fields
from .models import Product
from rest_framework import serializers
from django.contrib.auth.models import User
#Creating a serializer class for our serializer
#this is going to wrap around our product model and turn it into JSON format
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
