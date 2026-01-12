from django.contrib import admin
from .models import Store, ChaiVariety, ChaiSize, StoreChai

class StoreChaiInline(admin.TabularInline):
    model = StoreChai
    extra = 1
 
@admin.register(Store) 
# Jab admin panel me Store dikhe, toh is StoreAdmin class ke rules use karo.,
# there is another way to do this - 
#  class StoreAdmin(admin.ModelAdmin):
#     ...
# admin.site.register(Store, StoreAdmin)
class StoreAdmin(admin.ModelAdmin):
    list_display = ('name', 'location', 'is_active')
    list_filter = ('is_active',)
    search_fields = ('name', 'location')

    inlines = [StoreChaiInline]

@admin.register(ChaiVariety)
class ChaiVarietyAdmin(admin.ModelAdmin):
    list_display = ('name','is_seasonal', 'created_at')
    list_filter = ('is_seasonal',)
    search_filter = ('name',)

@admin.register(ChaiSize)
class ChaiSizeAdmin(admin.ModelAdmin):
    list_display = ('name', 'volume_ml')
    #Admin list default order me dikhegi:
    #Small → Medium → Large (by ml)
    #Ordering = business logic representation
    ordering = ('volume_ml',)

@admin.register(StoreChai)
class StoreChaiAdmin(admin.ModelAdmin):
    list_display = ('store', 'chai_variety', 'size', 'price', 'is_available')
    list_filter = ('store', 'chai_variety', 'size', 'is_available')
    # Kabhi bhi related model ke field pe kaam karna ho 
    # foreignkey__fieldname use karo
    search_fields = (
    'store__name',          # search by related Store name
    'chai_variety__name',   # search by related ChaiVariety name
    )