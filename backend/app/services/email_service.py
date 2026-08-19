"""
Email delivery service.

Sends contact form submissions to CONTACT_RECEIVER_EMAIL using the
Resend Email API. All credentials come from environment variables —
never hard-code them here.
"""

import resend

from app.config import Settings
from app.schemas.contact import ContactRequest


class EmailDeliveryError(Exception):
    """Raised when the email could not be sent."""


def _build_text_body(data: ContactRequest) -> str:
    return (
        "New message from your portfolio contact form\n\n"
        f"Name: {data.full_name}\n"
        f"Email: {data.email}\n"
        f"Phone: {data.phone or '-'}\n"
        f"Company/Organization: {data.company or '-'}\n"
        f"Subject: {data.subject}\n\n"
        f"Message:\n{data.message}\n"
    )


def _build_html_body(data: ContactRequest) -> str:
    return f"""
    <html>
      <body style="font-family: Arial, sans-serif; color: #14181f;">
        <h2>New Message from Your Portfolio</h2>
        <p><strong>Name:</strong> {data.full_name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.phone or '-'}</p>
        <p><strong>Company/Organization:</strong> {data.company or '-'}</p>
        <p><strong>Subject:</strong> {data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>{data.message}</p>
      </body>
    </html>
    """


def send_contact_email(data: ContactRequest, settings: Settings) -> None:
    """
    Sends the contact form data via the Resend Email API.

    Raises EmailDeliveryError if the email service is not configured
    or if sending fails, so the route layer can return a safe,
    user-friendly error without leaking internal details.
    """
    if not all(
        [
            settings.RESEND_API_KEY,
            settings.RESEND_FROM_EMAIL,
            settings.CONTACT_RECEIVER_EMAIL,
        ]
    ):
        raise EmailDeliveryError("Email service is not configured.")

    resend.api_key = settings.RESEND_API_KEY

    params = {
        "from": f"Portfolio Contact <{settings.RESEND_FROM_EMAIL}>",
        "to": [settings.CONTACT_RECEIVER_EMAIL],
        "subject": f"[Portfolio] {data.subject}",
        "text": _build_text_body(data),
        "html": _build_html_body(data),
        "reply_to": data.email,
    }

    try:
        resend.Emails.send(params)
    except Exception as exc:  # noqa: BLE001 - convert to a safe, generic error
        raise EmailDeliveryError("Failed to send email.") from exc
