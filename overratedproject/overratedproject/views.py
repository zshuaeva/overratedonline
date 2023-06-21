from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import DestinationCard, ReviewCard
import json
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
@require_http_methods(["GET", "POST"])
def api_list_locations(request):
    if request.method == "GET":
        try:
            locations = DestinationCard.objects.values_list('location', flat=True).distinct()
            return JsonResponse({"locations": list(locations)})
        except:
            return JsonResponse({"error": "Bad Request for Location Card"}, status=400)
    elif request.method == "POST":
        try:
            data = json.loads(request.body)
            locations = data.get('locations', [])
            for location_data in locations:
                print(location_data)
                location = location_data
                card = DestinationCard(location=location)
                card.save()
            return JsonResponse({"success": "Location Card created successfully!"})
        except Exception as e:
            print(e)
            return JsonResponse({"error": "There was an error creating the new Review Card"})


@csrf_exempt
@require_http_methods(["GET", "POST"])
def api_list_reviews(request):
  if request.method == "GET":
    try:
      review_cards = ReviewCard.objects.all()
      reviews = [[card.review, card.rating] for card in review_cards]
      return JsonResponse({"reviews": reviews})
    except:
      return JsonResponse({"error": "Bad Request for Review Card"}, status=400)
  elif request.method == "POST":
    try:
        data = json.loads(request.body)
        reviews = data.get('reviews', [])
        for review_data in reviews:
            print(review_data)
            review = review_data[0]
            rating = review_data[1]
            card = ReviewCard(review=review, rating=rating)
            card.save()
        return JsonResponse({"success!": "Review Card created successfully!"})
    except Exception as e:
        print(e)
        return JsonResponse({"error": "There was an error creating the new Review Card"})
