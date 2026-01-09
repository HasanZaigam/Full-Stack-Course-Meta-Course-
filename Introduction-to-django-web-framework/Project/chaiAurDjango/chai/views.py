from django.shortcuts import render
from .models import ChaiVarieties, Store
from django.shortcuts import get_object_or_404
from .forms import chaiVarietiesForms
# Create your views here.
def all_chai(request):
    return render(request,'chai/all_chai.html')

def order(request):
    orders = ChaiVarieties.objects.all()
    return render(request, 'chai/order.html', {'orders_Chais' : orders})

def chai_des(request, chai_id):
    chai_desc = get_object_or_404(ChaiVarieties, pk = chai_id)
    return render(request, 'chai/chai_description.html', {'chai_desc' : chai_desc})

def chai_store_view(request):
    stores = None

    if request.method == 'POST':
        form = chaiVarietiesForms(request.POST)
        if form.is_valid():
            chai_variety = form.cleaned_data['ChaiVariety']
            stores = Store.objects.filter(chai_variety=chai_variety)
    else:
        form = chaiVarietiesForms()

    return render(
        request,
        'chai/chai_store.html',
        {'stores': stores, 'form': form}
    )
