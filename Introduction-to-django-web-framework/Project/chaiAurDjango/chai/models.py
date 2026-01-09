from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
# Create your models here.

class ChaiVarieties(models.Model):
    CHAI_TYPE_CHOICE = [
        ('ML','MASALA'),
        ('GN','GINGER'),
        ('PL','PLAIN'),
        ('KI','KIWI'),
        ('EL','ELACHI'),
    ]

    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='chais/')
    date_added = models.DateTimeField(default=timezone.now)
    type = models.CharField(max_length=2, choices=CHAI_TYPE_CHOICE)
    description = models.TextField(default='')
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)

    def __str__(self):
        return self.name

# one to many

class ChaiReview(models.Model):
    chai = models.ForeignKey(ChaiVarieties, on_delete = models.CASCADE, related_name = 'reviews')
    user = models.ForeignKey(User, on_delete= models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField()
    date_added = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f'{self.user.username} review for {self.chai.name}'
    
# many to many

class Store(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    chai_variety = models.ManyToManyField(ChaiVarieties, related_name='stores')

    def __str__(self):
        return self.name


# one to one

class ChaiCertificate(models.Model):
    chai = models.OneToOneField(ChaiVarieties, on_delete=models.CASCADE, related_name= 'certificate')
    certificate_number = models.CharField(max_length=100)
    issued_date = models.DateTimeField(default=timezone.now)
    valid_until = models.DateTimeField()

    def __str__(self):
        return f'Certificate for {self.name.chai}'