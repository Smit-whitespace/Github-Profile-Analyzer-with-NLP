import pytest
import requests
from backend.github_api import fetch_user_data

def test_fetch_user_data_success(requests_mock):
    """Should return correct data for valid username"""
    mock_data = {"login": "octocat", "public_repos": 8}
    requests_mock.get("https://api.github.com/users/octocat", json=mock_data, status_code=200)

    result = fetch_user_data("octocat")
    assert result["login"] == "octocat"
    assert result["public_repos"] == 8

def test_fetch_user_data_not_found(requests_mock):
    """Should return an error message when user not found"""
    requests_mock.get("https://api.github.com/users/ghost", status_code=404)

    result = fetch_user_data("ghost")
    assert "error" in result
    assert result["error"] == "User not found"
