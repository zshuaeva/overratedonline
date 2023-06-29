from channels.generic.websocket import AsyncWebsocketConsumer

class PlayRoomConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()
        print("WebSocket connection established.")

    async def disconnect(self, close_code):
        print("WebSocket connection closed.")

    async def receive(self, text_data):
        print("Received WebSocket data:", text_data)

    async def join(self, event):
        print("Sent client ID to the server:", event['clientId'])
