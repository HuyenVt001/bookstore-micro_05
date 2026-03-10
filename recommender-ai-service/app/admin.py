from django.contrib import admin

admin.site.register = lambda *args, **kwargs: None
