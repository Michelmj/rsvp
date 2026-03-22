from django.db import models

class rsvp(models.Model):
    name = models.CharField(max_length=150, unique=True)
    spouse_name = models.CharField(max_length=100, blank=True, null=True)
    email = models.EmailField(unique=True) # prevents duplicate email
    number = models.CharField(max_length= 20, blank=True, default= '', unique=True)
    response = models.CharField(max_length=20)
    
    submittedat = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name