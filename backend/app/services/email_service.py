"""
Email delivery service.

Sends contact form submissions to CONTACT_RECEIVER_EMAIL using SMTP
(e.g. Gmail with an App Password). All credentials come from environment
variables — never hard-code them here.
"""

import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from app.config import Settings
from app.schemas.contact import ContactRequest


class EmailDeliveryError(Exception):
    """Raised when the email could not be sent."""


def _build_message(data: ContactRequest, settings: Settings) -> MIMEMultipart:
    message = MIMEMultipart("alternative")
    message["Subject"] = f"[Portfolio Contact] {data.subject}"
    message["From"] = settings.SMTP_USERNAME
    message["To"] = settings.CONTACT_RECEIVER_EMAIL
    message["Reply-To"] = data.email

    text_body = (
        f"New message from your portfolio contact form\n\n"
        f"Name: {data.full_name}\n"
        f"Email: {data.email}\n"
        f"Phone: {data.phone or '-'}\n"
        f"Company/Organization: {data.company or '-'}\n"
        f"Subject: {data.subject}\n\n"
        f"Message:\n{data.message}\n"
    )

    html_body = f"""
    <html>
      <body style="font-family: Arial, sans-serif; color: #14181f;">
        <h2>New portfolio contact form submission</h2>
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

    message.attach(MIMEText(text_body, "plain"))
    message.attach(MIMEText(html_body, "html"))
    return message


def send_contact_email(data: ContactRequest, settings: Settings) -> None:
    """
    Sends the contact form data via SMTP.

    Raises EmailDeliveryError if the email service is not configured
    or if sending fails, so the route layer can return a safe,
    user-friendly error without leaking internal details.
    """
    if not all(
        [
            settings.SMTP_HOST,
            settings.SMTP_USERNAME,
            settings.SMTP_PASSWORD,
            settings.CONTACT_RECEIVER_EMAIL,
        ]
    ):
        raise EmailDeliveryError("Email service is not configured.")

    message = _build_message(data, settings)

    try:
        with smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT) as server:
            server.starttls()
            server.login(settings.SMTP_USERNAME, settings.SMTP_PASSWORD)
            server.sendmail(
                settings.SMTP_USERNAME,
                settings.CONTACT_RECEIVER_EMAIL,
                message.as_string(),
            )
    except Exception as exc:  # noqa: BLE001 - convert to a safe, generic error
        raise EmailDeliveryError("Failed to send email.") from exc
