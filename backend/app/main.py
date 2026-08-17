from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import get_settings
from app.routes import contact, health

settings = get_settings()

app = FastAPI(
    title="Mayank Singh Negi — Portfolio API",
    description="Backend API powering the contact form for mayanksnegi's developer portfolio.",
    version="1.0.0",
)

# CORS: only allow the configured frontend origin(s).
allowed_origins = [settings.FRONTEND_URL]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=False,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type"],
)

app.include_router(health.router)
app.include_router(contact.router)


@app.get("/")
def root():
    return {"message": "Mayank Singh Negi portfolio API. See /docs for API documentation."}
