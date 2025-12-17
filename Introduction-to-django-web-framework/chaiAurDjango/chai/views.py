from django.shortcuts import render
from .models import ChaiVarieties
# Create your views here.
def all_chai(request):
    return render(request,'chai/all_chai.html')

def order(request):
    orders = ChaiVarieties.objects.all()
    return render(request, 'chai/order.html', {'orders_Chais' : orders})
