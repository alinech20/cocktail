from fastapi import FastAPI

from config import create_schemas
from config.db import Base, engine
from v1 import api

Base.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(api.router)

@app.get("/")
def home():
  return { "message": "Hello World!"}
