from django.db import models

class DestinationCard(models.Model):
  location = models.CharField(max_length=100)

  def __str__(self):
    return self.location

class ReviewCard(models.Model):
  review = models.CharField(max_length=250, null=True)
  rating = models.IntegerField(null=True)
  def __str__(self):
        return self.review if self.review is not None else 'No review'
