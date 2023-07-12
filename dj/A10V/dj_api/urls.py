from django.urls import path
from dj_api import views

urlpatterns=[
    path('login/',views.login),
    path("get_user/",views.get_user),
    path('register/',views.register),
]