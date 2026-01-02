from django.shortcuts import render
from .models import ChaiVarieties
from django.shortcuts import get_object_or_404
# Create your views here.
def all_chai(request):
    return render(request,'chai/all_chai.html')

def order(request):
    orders = ChaiVarieties.objects.all()
    return render(request, 'chai/order.html', {'orders_Chais' : orders})

def chai_des(request, chai_id):
    chai_desc = get_object_or_404(ChaiVarieties, pk = chai_id)
    return render(request, 'chai/chai_description.html', {'chai_desc' : chai_desc})


