from django.db import models

# Create your models here.
<<<<<<< HEAD
=======

class CarouselImage(models.Model):
    image = models.ImageField(upload_to='carousel_images/')
    caption = models.CharField(max_length=255, blank=True)
    
>>>>>>> origin/main
