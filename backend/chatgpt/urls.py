from django.urls import path
from .views import getResponseChatgpt

app_name = "chatgpt"

urlpatterns = [
    path("getResponseChatgpt", getResponseChatgpt, name="getResponseChatgpt")
]