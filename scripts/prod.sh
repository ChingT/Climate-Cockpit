python app/manage.py collectstatic --no-input
python app/manage.py migrate
gunicorn -w 4 -b 0.0.0.0:8000 app.project.wsgi:application
