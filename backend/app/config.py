"""
Application configuration.

All values are loaded from environment variables (see .env.example).
NEVER hard-code secrets here.
"""

from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    # CORS / frontend
    FRONTEND_URL: str = "http://localhost:5173"

    # Contact form recipient
    CONTACT_RECEIVER_EMAIL: str = ""

    # SMTP configuration
    SMTP_HOST: str = ""
    SMTP_PORT: int = 587
    SMTP_USERNAME: str = ""
    SMTP_PASSWORD: str = ""

    # Basic anti-spam
    RATE_LIMIT_MAX_REQUESTS: int = 3
    RATE_LIMIT_WINDOW_SECONDS: int = 3600

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")


@lru_cache
def get_settings() -> Settings:
    return Settings()
