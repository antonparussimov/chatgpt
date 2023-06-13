from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import time
import json
import os
import openai

openai.api_key = ""

@csrf_exempt
def getResponseChatgpt(request):
  if request.method == "POST":
    data = json.loads(request.body)
    prompt = data['prompt']
    
    response = openai.ChatCompletion.create(
      model="gpt-3.5-turbo",
      messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": prompt},
        # {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
        # {"role": "user", "content": "Where was it played?"}
      ]
    )

    resData = {
      'type': "contact",
      'message': response.choices[0].message.content,
      'time': time.time()
    }
    return JsonResponse(resData, status = 200)
  else:
    return JsonResponse({}, status = 404)