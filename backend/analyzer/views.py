from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def analyze_github_profile(request, username):
  # Test response...
  test_response = {
    "summary": {
      "username": username,
      "public_repos": 5,
      "followers":12,
      "following":3,
    },
    "languages": {
      "JavaScript": 40,
      "Python": 30,
      "HTML": 20,
      "CSS": 10
    },
    "commits":[5, 10, 3, 8, 6, 12],
    "nlp": {
      "summary": "Writes clean README files",
      "tone": "Professional",
      "keywords": ["API", "React", "Docker"],
      "maturity": "High"
    },
    "network": [
      {"name": "alice", "contributions": 15},
      {"name":"bob", "contributions":10}
    ]
  }
  return Response(mock_response)