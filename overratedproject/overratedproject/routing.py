from django.urls import re_path

from . import consumers

websocket_urlpatterns = [
    re_path(r'ws/play-room/$', consumers.PlayRoomConsumer.as_asgi()),
]
