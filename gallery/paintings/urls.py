from django.urls import path
from .views import PaintingList, ChinesePaintingList, PaintingDetail

urlpatterns = [
    path('paintings/', PaintingList.as_view()),
    path('chinesepaintings/', ChinesePaintingList.as_view()),
    path('paintings/<int:pk>/', PaintingDetail.as_view())
]
