from django.db import models

# Create your models here.

# Create the Schema of Store Table
class Store(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

# Created the class for the ingredients table for resuability.
class Ingredients(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

# Created the table for chaiVariety Storing.
class ChaiVariety(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    ingridents = models.ManyToManyField(
        Ingredients,
        related_name = 'chai_varieties' 
    )
    is_seasonal = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

# Created the ChaiSizes table for different chai sizes.
class ChaiSizes(models.Model):
    name = models.CharField(max_length=100)
    voulme_ml = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.name} ({self.voulme_ml}ml)"

# Created the main table StoreChai, it links all the table.
class StoreChai(models.Model):
    store = models.ForeignKey(Store, on_delete=models.CASCADE)
    chai_variety = models.ForeignKey(ChaiVariety, on_delete=models.CASCADE)
    size = models.ForeignKey(ChaiSizes, on_delete=models.CASCADE)

    price = models.DecimalField(max_digits=6, decimal_places=2)
    is_available = models.BooleanField(default=True)

    class Meta:
        unique_together = ('store', 'chai_variety', 'size')

    def __str__(self):
        return f"{self.store} - {self.chai_variety} - {self.size}"
