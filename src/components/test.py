import os
import openai
openai.api_type = "azure"
openai.api_base = "https://greninjagpt4.openai.azure.com/"
openai.api_version = "2023-03-15-preview"
openai.api_key = "ff49d8ccf6534ea4b72b50d04c1eb06d"

response = openai.ChatCompletion.create(
  engine="GreninjaAi",
  messages = [{"role":"system","content":"You are an AI assistant that helps people find information."},{"role":"user","content":"what is my name"}],
  temperature=0.7,
  max_tokens=800,
  top_p=0.95,
  frequency_penalty=0,
  presence_penalty=0,
  stop=None)
print(response)