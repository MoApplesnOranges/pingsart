from rest_framework import serializers
from .models import Painting, ChinesePainting


class ChinesePaintingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChinesePainting
        fields = '__all__'


class PaintingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Painting
        fields = '__all__'
