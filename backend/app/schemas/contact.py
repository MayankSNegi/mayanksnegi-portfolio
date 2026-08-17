"""
Request/response schemas for the contact endpoint.
"""

from pydantic import BaseModel, EmailStr, Field, field_validator


class ContactRequest(BaseModel):
    full_name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    phone: str | None = Field(default=None, max_length=20)
    company: str | None = Field(default=None, max_length=100)
    subject: str = Field(..., min_length=3, max_length=150)
    message: str = Field(..., min_length=10, max_length=3000)
    website: str | None = Field(default=None, max_length=200)

    @field_validator("full_name", "subject", "message")
    @classmethod
    def strip_and_check_not_empty(cls, value: str) -> str:
        stripped = value.strip()
        if not stripped:
            raise ValueError("This field cannot be empty.")
        return stripped

    @field_validator("phone", "company")
    @classmethod
    def strip_optional(cls, value: str | None) -> str | None:
        if value is None:
            return value
        stripped = value.strip()
        return stripped or None


class ContactResponse(BaseModel):
    success: bool
    message: str


class HealthResponse(BaseModel):
    status: str
    service: str
