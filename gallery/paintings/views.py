# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Painting
from .serializers import PaintingSerializer

class PaintingList(APIView):
    def get(self, request):
        paintings = Painting.objects.all()
        serializer = PaintingSerializer(paintings, many=True)
        return Response(serializer.data)
