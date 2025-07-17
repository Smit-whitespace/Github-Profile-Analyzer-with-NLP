from django.urls import pathfrom .views import analyze_github_profile

urlpatterns = [
  path('analyze/<str:username>/', analyze_github_profile),
]