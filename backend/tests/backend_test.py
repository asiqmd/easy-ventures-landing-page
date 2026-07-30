"""Backend API tests for Easy Ventures site."""
import os
import uuid
import time
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL')
if not BASE_URL:
    # fallback read from frontend/.env
    with open('/app/frontend/.env') as f:
        for line in f:
            if line.startswith('REACT_APP_BACKEND_URL='):
                BASE_URL = line.strip().split('=', 1)[1]
                break
BASE_URL = BASE_URL.rstrip('/')


@pytest.fixture
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# --- Health ---
def test_root_health(client):
    r = client.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    data = r.json()
    assert "message" in data and "Easy Ventures" in data["message"]


# --- Contact ---
def test_contact_valid_minimal(client):
    payload = {
        "full_name": "TEST User",
        "email": f"test_{uuid.uuid4().hex[:8]}@example.com",
        "message": "Hello, this is a test message.",
    }
    r = client.post(f"{BASE_URL}/api/contact", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["ok"] is True
    assert "id" in data and len(data["id"]) > 0


def test_contact_valid_full(client):
    payload = {
        "full_name": "TEST Full",
        "company": "TEST Co",
        "email": f"test_{uuid.uuid4().hex[:8]}@example.com",
        "phone": "+1-555-0100",
        "subject": "Partnership",
        "message": "Interested in partnership opportunities.",
    }
    r = client.post(f"{BASE_URL}/api/contact", json=payload)
    assert r.status_code == 200, r.text
    assert r.json()["ok"] is True


def test_contact_invalid_email(client):
    r = client.post(f"{BASE_URL}/api/contact", json={
        "full_name": "Foo Bar",
        "email": "not-an-email",
        "message": "Hello world",
    })
    assert r.status_code == 422


def test_contact_missing_fields(client):
    r = client.post(f"{BASE_URL}/api/contact", json={"email": "a@b.com"})
    assert r.status_code == 422


# --- Newsletter ---
def test_newsletter_valid_and_duplicate(client):
    email = f"test_{uuid.uuid4().hex[:8]}@example.com"
    r1 = client.post(f"{BASE_URL}/api/newsletter", json={"email": email})
    assert r1.status_code == 200, r1.text
    d1 = r1.json()
    assert d1["ok"] is True
    assert "Subscribed" in d1["message"] or "subscribed" in d1["message"]

    # Duplicate
    time.sleep(0.2)
    r2 = client.post(f"{BASE_URL}/api/newsletter", json={"email": email})
    assert r2.status_code == 200
    d2 = r2.json()
    assert d2["ok"] is True
    assert "already" in d2["message"].lower()


def test_newsletter_invalid_email(client):
    r = client.post(f"{BASE_URL}/api/newsletter", json={"email": "bad"})
    assert r.status_code == 422
