from django.contrib import admin
from .models import Store, ChaiVariety, ChaiSizes, StoreChai

# Register your models here.
admin.site.register(Store)
admin.site.register(ChaiVariety)
admin.site.register(ChaiSizes)
admin.site.register(StoreChai)

