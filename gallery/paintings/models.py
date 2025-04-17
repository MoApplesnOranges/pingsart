from django.db import models

class Painting(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='paintings/')
    year = models.CharField(max_length=10)
    medium = models.CharField(max_length=100)
    dimensions = models.CharField(max_length=100)

    def __str__(self):
        return self.title
