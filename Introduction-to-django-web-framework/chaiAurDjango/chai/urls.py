
from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_chai, name = "all_chai"),
    path('order/', views.order, name = "chaiOrders"),
    path('<int:chai_id>/', views.chai_des, name = "chai_description")
]