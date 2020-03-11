from django.urls import path
# from ..view import common_views as views
from . import views

app_name = "foods"

urlpatterns = [
    path("list/", views.foods_list),
    path("parsing/", views.foods_parsing),
]

