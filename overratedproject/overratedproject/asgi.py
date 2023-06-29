"""
ASGI config for overratedproject project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/asgi/
"""

from django.urls import path
from channels.routing import ProtocolTypeRouter, URLRouter
from overratedproject import routing

application = ProtocolTypeRouter(
    {
        'http': get_asgi_application(),
        'websocket': URLRouter(routing.websocket_urlpatterns),
    }
)
