#!/usr/bin/env bash
set -e

# Wait for Postgres
if [ -n "$DATABASE_URL" ]; then
  echo "Waiting for database..."
  python - <<'PY'
import os, time, urllib.parse, psycopg
url=os.environ["DATABASE_URL"]
# dj-database-url format accepted; ensure psycopg understands it
if url.startswith("postgres://"):
    url = url.replace("postgres://", "postgresql://", 1)
for _ in range(60):
    try:
        with psycopg.connect(url, connect_timeout=3) as conn:
            with conn.cursor() as cur:
                cur.execute("SELECT 1;")
        break
    except Exception as e:
        time.sleep(1)
else:
    raise SystemExit("DB not available after 60s")
PY
fi

echo "Running migrations..."
python manage.py migrate --noinput

echo "Collecting static..."
python manage.py collectstatic --noinput

echo "Starting Gunicorn..."
exec gunicorn gallery.wsgi:application --bind 0.0.0.0:8000 --workers 3 --timeout 120
