from django.urls import path
from .views import PaintingList

urlpatterns = [
    path('paintings/', PaintingList.as_view()),
]
