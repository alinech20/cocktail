from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from config.db import Base, engine
from v1 import api

Base.metadata.create_all(bind=engine)

origins = [
  "https://cocktail-q612.onrender.com/" # free prod environment on render
]

app = FastAPI()
app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

app.include_router(api.router)
