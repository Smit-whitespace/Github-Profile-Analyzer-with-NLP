import pytest
from backend.nlp_analyzer import analyze_sentiment

def test_analyze_sentiment_positive():
    """Positive text should return polarity > 0"""
    text = "I love building open-source projects!"
    polarity = analyze_sentiment(text)
    assert polarity > 0

def test_analyze_sentiment_negative():
    """Negative text should return polarity < 0"""
    text = "I hate when tests fail!"
    polarity = analyze_sentiment(text)
    assert polarity < 0

def test_analyze_sentiment_neutral():
    """Neutral text should return polarity near 0"""
    text = "This is a repository."
    polarity = analyze_sentiment(text)
    assert abs(polarity) < 0.1
