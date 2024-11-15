from fastapi import Depends
from sqlalchemy.orm import Session

from config.db import db_session
from core.models.ingredient import IngredientCategory

def get_all(page_size: int = 100, skip: int = 0, db: Session = Depends(db_session)):
  return db.query(IngredientCategory).offset(skip).limit(page_size).all()

def get_one_by_id(id: int, db: Session = Depends(db_session)):
  return db.query(IngredientCategory).where(IngredientCategory.id == id).first()
