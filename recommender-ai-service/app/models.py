from django.db import models

class Recommendation(models.Model):
    customer_id = models.IntegerField()
    recommended_book_ids = models.JSONField(default=list)
    reason = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Recommendations for Customer {self.customer_id}"
