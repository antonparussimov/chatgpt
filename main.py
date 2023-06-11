
import os
import openai

# openai.organization = "YOUR_ORG_ID"
openai.api_key = "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"

response = openai.ChatCompletion.create(
  model="gpt-3.5-turbo",
  messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Who won the world series in 2020?"},
        {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
        {"role": "user", "content": "Where was it played?"}
    ]
)

print(response)