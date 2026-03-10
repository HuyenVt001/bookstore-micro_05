from django.db import models

class Rating(models.Model):
    book_id = models.IntegerField()
    customer_id = models.IntegerField()
    rating = models.IntegerField(choices=[(i, str(i)) for i in range(1, 6)])
    comment = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('book_id', 'customer_id')

    def __str__(self):
        return f"Rating {self.rating} for Book {self.book_id} by Customer {self.customer_id}"
