from fastapi import APIRouter

from core import crud

"""
Endpoints for everything ingredient related:
ingredients, categories
"""

router = APIRouter(prefix="/ingredients", tags=["Ingredients"])

@router.get("/")
def read_all():
  return crud.ingredients.get_all()

@router.get("/categories")
def read_all():
  return crud.categories.get_all()

@router.get("/{id}")
def read_one_by_id(id: int):
  return crud.ingredients.get_one_by_id(id)

@router.get("/categories/{id}")
def read_one_by_id(id: int):
  return crud.categories.get_one_by_id(id)
