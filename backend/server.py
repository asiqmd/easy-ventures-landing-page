from fastapi import FastAPI, APIRouter, BackgroundTasks, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
from email.message import EmailMessage
import aiosmtplib


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="Easy Ventures API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# ---------------------------------------------------------------------------
# Models
# ---------------------------------------------------------------------------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactCreate(BaseModel):
    full_name: str = Field(min_length=2, max_length=120)
    company: Optional[str] = Field(default=None, max_length=160)
    email: EmailStr
    phone: Optional[str] = Field(default=None, max_length=40)
    subject: Optional[str] = Field(default=None, max_length=160)
    message: str = Field(min_length=5, max_length=5000)


class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    full_name: str
    company: Optional[str] = None
    email: EmailStr
    phone: Optional[str] = None
    subject: Optional[str] = None
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class NewsletterCreate(BaseModel):
    email: EmailStr


# ---------------------------------------------------------------------------
# SMTP helper (graceful degradation when not configured)
# ---------------------------------------------------------------------------
def _smtp_configured() -> bool:
    return bool(os.environ.get('SMTP_HOST') and os.environ.get('SMTP_USERNAME') and os.environ.get('SMTP_PASSWORD'))


async def send_smtp_email(*, to_email: str, subject: str, text_body: str,
                          html_body: Optional[str] = None, reply_to: Optional[str] = None):
    if not _smtp_configured():
        logger.info("SMTP not configured - skipping email to %s (subject: %s)", to_email, subject)
        return

    from_email = os.environ.get('SMTP_FROM_EMAIL') or os.environ['SMTP_USERNAME']
    from_name = os.environ.get('SMTP_FROM_NAME', 'Easy Ventures')

    msg = EmailMessage()
    msg["From"] = f"{from_name} <{from_email}>"
    msg["To"] = to_email
    msg["Subject"] = subject
    if reply_to:
        msg["Reply-To"] = reply_to
    msg.set_content(text_body)
    if html_body:
        msg.add_alternative(html_body, subtype="html")

    use_ssl = os.environ.get('SMTP_USE_SSL', 'false').lower() == 'true'
    kwargs = dict(
        hostname=os.environ['SMTP_HOST'],
        port=int(os.environ.get('SMTP_PORT', '587')),
        username=os.environ['SMTP_USERNAME'],
        password=os.environ['SMTP_PASSWORD'],
        timeout=30,
    )
    if use_ssl:
        kwargs["use_tls"] = True
    else:
        kwargs["start_tls"] = os.environ.get('SMTP_STARTTLS', 'true').lower() == 'true'

    try:
        await aiosmtplib.send(msg, **kwargs)
        logger.info("Email sent to %s", to_email)
    except Exception as exc:  # noqa: BLE001
        logger.error("Failed to send email to %s: %s", to_email, exc)


async def notify_contact(payload: ContactCreate):
    inbox = os.environ.get('COMPANY_INBOX') or os.environ.get('SMTP_FROM_EMAIL')
    if inbox:
        text = (
            f"New website inquiry\n\n"
            f"Name: {payload.full_name}\n"
            f"Company: {payload.company or '-'}\n"
            f"Email: {payload.email}\n"
            f"Phone: {payload.phone or '-'}\n"
            f"Subject: {payload.subject or '-'}\n\n"
            f"Message:\n{payload.message}\n"
        )
        html = f"""
        <div style=\"font-family:Arial,sans-serif;color:#0A0A0A\">
          <h2 style=\"color:#0066FF\">New website inquiry</h2>
          <p><b>Name:</b> {payload.full_name}</p>
          <p><b>Company:</b> {payload.company or '-'}</p>
          <p><b>Email:</b> {payload.email}</p>
          <p><b>Phone:</b> {payload.phone or '-'}</p>
          <p><b>Subject:</b> {payload.subject or '-'}</p>
          <p><b>Message:</b><br>{payload.message.replace(chr(10), '<br>')}</p>
        </div>
        """
        await send_smtp_email(to_email=inbox, subject=f"New inquiry from {payload.full_name}",
                              text_body=text, html_body=html, reply_to=payload.email)

    # Confirmation to the visitor
    await send_smtp_email(
        to_email=payload.email,
        subject="We received your message — Easy Ventures",
        text_body=(f"Hi {payload.full_name},\n\nThank you for reaching out to Easy Ventures. "
                   "Our team has received your message and will get back to you shortly.\n\n— Easy Ventures"),
        html_body=(f"<p>Hi {payload.full_name},</p><p>Thank you for reaching out to <b>Easy Ventures</b>. "
                   "Our team has received your message and will get back to you shortly.</p><p>— Easy Ventures</p>"),
    )


# ---------------------------------------------------------------------------
# Routes
# ---------------------------------------------------------------------------
@api_router.get("/")
async def root():
    return {"message": "Easy Ventures API is running"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


@api_router.post("/contact")
async def create_contact(payload: ContactCreate, background_tasks: BackgroundTasks):
    submission = ContactSubmission(**payload.model_dump())
    doc = submission.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contact_submissions.insert_one(doc)
    background_tasks.add_task(notify_contact, payload)
    return {"ok": True, "message": "Thank you! Your message has been received.", "id": submission.id}


@api_router.post("/newsletter")
async def subscribe_newsletter(payload: NewsletterCreate, background_tasks: BackgroundTasks):
    existing = await db.newsletter_subscribers.find_one({"email": payload.email})
    if existing:
        return {"ok": True, "message": "You're already subscribed."}
    doc = {
        "id": str(uuid.uuid4()),
        "email": payload.email,
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    await db.newsletter_subscribers.insert_one(doc)
    background_tasks.add_task(
        send_smtp_email,
        to_email=payload.email,
        subject="Welcome to Easy Ventures",
        text_body="Thanks for subscribing to Easy Ventures. You'll be the first to hear our latest news.",
        html_body="<p>Thanks for subscribing to <b>Easy Ventures</b>. You'll be the first to hear our latest news.</p>",
    )
    return {"ok": True, "message": "Subscribed! Check your inbox."}


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
