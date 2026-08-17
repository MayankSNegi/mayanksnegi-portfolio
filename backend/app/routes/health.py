from fastapi import APIRouter

from app.schemas.contact import HealthResponse

router = APIRouter()


@router.get("/api/health", response_model=HealthResponse)
def health_check() -> HealthResponse:
    return HealthResponse(status="ok", service="mayank-portfolio-backend")
