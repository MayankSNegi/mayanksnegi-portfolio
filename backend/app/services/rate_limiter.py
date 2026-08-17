"""
Very small in-memory rate limiter for the contact endpoint.

This is intentionally simple (Version 1 has no database). It tracks
request timestamps per client IP within a sliding window. For a
higher-traffic production deployment, replace this with a Redis-backed
limiter or a hosted service (e.g. Cloudflare, an API gateway).
"""

import hashlib
import time
from collections import defaultdict

_request_log: dict[str, list[float]] = defaultdict(list)
_duplicate_log: dict[str, float] = {}

def is_rate_limited(client_id: str, max_requests: int, window_seconds: int) -> bool:
    now = time.time()
    window_start = now - window_seconds

    timestamps = [t for t in _request_log[client_id] if t > window_start]
    timestamps.append(now)
    _request_log[client_id] = timestamps

    return len(timestamps) > max_requests
def is_duplicate_submission(
    client_id: str,
    email: str,
    subject: str,
    message: str,
    cooldown_seconds: int = 600,
) -> bool:
    normalized = "|".join(
        [
            client_id,
            email.strip().lower(),
            subject.strip().lower(),
            message.strip().lower(),
        ]
    )

    fingerprint = hashlib.sha256(normalized.encode("utf-8")).hexdigest()

    now = time.time()
    last_submission = _duplicate_log.get(fingerprint)

    if last_submission is not None and now - last_submission < cooldown_seconds:
        return True

    _duplicate_log[fingerprint] = now
    return False