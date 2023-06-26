from django.urls import path
from myapp import views

urlpatterns = [
    path('persons/', views.PersonList.as_view(), name='person-list'),
]