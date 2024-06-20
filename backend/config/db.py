from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from os import getenv
from dotenv import load_dotenv

load_dotenv()

env = getenv("ENV")

if env != "PROD":
  db_url = getenv("DEV_DB")
else:
  db_url = getenv("PROD_DB")

engine = create_engine(db_url)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
