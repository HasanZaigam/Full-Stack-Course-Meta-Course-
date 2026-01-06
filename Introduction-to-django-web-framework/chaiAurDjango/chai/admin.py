from django.contrib import admin
from .models import ChaiVarieties, ChaiReview, Store, ChaiCertificate

# Register your models here.
class chaiReviewInLine(admin.TabularInline):
    model = ChaiReview
    extra = 2

class chaiVarietyAdmin(admin.ModelAdmin):
    list_display = ('name', 'type', 'date_added')
    inlines = [chaiReviewInLine]

class storeAdmin(admin.ModelAdmin):
    list_display = ('name', 'location')
    filter_horizontal = ('chai_variety',)

class chaiCertificateAdmin(admin.ModelAdmin):
    list_display = ('chai', 'certificate_number')  

admin.site.register(ChaiVarieties, chaiVarietyAdmin)
admin.site.register(Store,storeAdmin)
admin.site.register(ChaiCertificate,chaiCertificateAdmin)
  