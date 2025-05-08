# Create your views here.
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Painting, ChinesePainting
from .serializers import PaintingSerializer


class PaintingList(APIView):
    def get(self, request):
        paintings = Painting.objects.all()
        serializer = PaintingSerializer(paintings, many=True)
        return Response(serializer.data)


class ChinesePaintingList(APIView):
    def get(self, request):
        chinese_paintings = ChinesePainting.objects.all()
        serializer = PaintingSerializer(chinese_paintings, many=True)
        return Response(serializer.data)


class PaintingDetail(generics.RetrieveAPIView):
    queryset = Painting.objects.all()
    serializer_class = PaintingSerializer
