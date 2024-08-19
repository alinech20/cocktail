from typing import Annotated
from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session

from config.db import db_session
from core import crud

from core.schemas.recipe import Recipe as RecipeResponse

router = APIRouter(prefix="/recipes", tags=["Recipes"])

@router.get("/", response_model=list[RecipeResponse])
def read_all(page: int = 1, size: int = 10, db: Session = Depends(db_session)):
  return crud.recipes.get_all(db, page, size)

@router.get("/filter/", response_model=list[RecipeResponse])
def read_many_where(name: Annotated[str | None, Query()] = None,
                    ing: Annotated[list[str] | None, Query()] = None,
                    page: int = 1,
                    size: int = 10,
                    db: Session = Depends(db_session)):
  return crud.recipes.get_many_where(name, ing, page, size, db)

@router.get("/{id}/", response_model=RecipeResponse)
def read_one_by_id(id: int, db: Session = Depends(db_session)):
  return crud.recipes.get_one_by_id(id, db)
