
from django.contrib import admin
from django.urls import path
from .views import api_list_locations, api_list_reviews

urlpatterns = [
    path("admin/", admin.site.urls),
    path('api/locations/', api_list_locations, name='list_locations'),
    path('api/reviews/', api_list_reviews, name='list_reviews'),
]
