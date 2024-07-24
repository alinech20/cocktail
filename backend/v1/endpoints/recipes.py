from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from config.db import db_session
from core import crud

router = APIRouter(prefix="/recipes", tags=["Recipes"])

@router.get("/")
def read_all(db: Session = Depends(db_session)):
  return crud.recipes.get_all(db)

@router.get("/{id}/")
def read_one_by_id(id: int, db: Session = Depends(db_session)):
  return crud.recipes.get_one_by_id(id, db)
