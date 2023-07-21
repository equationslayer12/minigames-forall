from django.urls import path
from . import views

urlpatterns = [
    path('donde/', views.get_data)
]