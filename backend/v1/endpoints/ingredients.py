from fastapi import APIRouter
from core.models import ingredient

router = APIRouter(prefix="/ingredients", tags=["Ingredients"])

@router.get("/")
def get_all_ingredients():
  return { "ingredients": "all" }
