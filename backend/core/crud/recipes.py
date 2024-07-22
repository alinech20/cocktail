from fastapi import Depends
from sqlalchemy.orm import Session

from core.models.recipe import Recipe

def get_all(db: Session, page_size: int = 100, skip: int = 0):
  return db.query(Recipe).offset(skip).limit(page_size).all()

def get_one_by_id(id: int, db: Session):
  return db.query(Recipe).where(Recipe.id == id).first()
