import logging

from fastapi import APIRouter, HTTPException, Request, status

from app.config import Settings, get_settings
from app.schemas.contact import ContactRequest, ContactResponse
from app.services.email_service import EmailDeliveryError, send_contact_email
from app.services.rate_limiter import is_duplicate_submission, is_rate_limited

logger = logging.getLogger("contact")
router = APIRouter()


@router.post("/api/contact", response_model=ContactResponse)
def submit_contact_form(payload: ContactRequest, request: Request) -> ContactResponse:
    settings: Settings = get_settings()

    client_ip = request.client.host if request.client else "unknown"
    if payload.website:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid submission.",
        )
    if is_rate_limited(
        client_ip,
        max_requests=settings.RATE_LIMIT_MAX_REQUESTS,
        window_seconds=settings.RATE_LIMIT_WINDOW_SECONDS,
    ):
        raise HTTPException(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            detail="Too many requests. Please try again in a minute.",
        )
        
    if is_duplicate_submission(
        client_ip,
        payload.email,
        payload.subject,
        payload.message,
    ):
        raise HTTPException(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            detail="Duplicate submission. Please wait before sending the same message again.",
        )        

    try:
        send_contact_email(payload, settings)
    except EmailDeliveryError:
        # Never leak SMTP/internal errors to the client.
        logger.exception("Failed to send contact email")
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail="We couldn't send your message right now. Please try again later "
            "or reach out directly via LinkedIn or GitHub.",
        ) from None

    return ContactResponse(
        success=True,
        message="Message sent successfully. Thank you for reaching out!",
    )
