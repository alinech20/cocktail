# Stage-1
FROM python:3-alpine as base

ENV PYTHONUNBUFFERED 1
ENV COMPOSE_PROJECT_NAME "cocktail-app"

# set cwd to /src
WORKDIR /src

# copy requirements.txt and install dependencies
COPY ./requirements.txt .
RUN pip install --no-cache-dir --upgrade -r requirements.txt

# copy project code
COPY . .

EXPOSE 8000

# Stage-2 - dev
FROM base as dev

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
