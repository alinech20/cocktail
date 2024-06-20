FROM python:3-alpine

ENV PYTHONUNBUFFERED 1
ENV COMPOSE_PROJECT_NAME "cocktail-app"

WORKDIR /src
COPY /backend /src
RUN pip install -r requirements.txt
