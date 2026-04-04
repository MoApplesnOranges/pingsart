# Dockerfile
FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

# System deps (build tools if you have packages needing compile)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential curl && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install Python deps first (leverages Docker layer caching)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy project
COPY . .

# Collect static at build time (optional—safe to re-run at startup too)
# You can keep it here or only in entrypoint.sh
# RUN python manage.py collectstatic --noinput

# Gunicorn by default; overridden by entrypoint
CMD ["./entrypoint.sh"]
