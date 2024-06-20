from fastapi import APIRouter
from core.models import recipe

router = APIRouter(prefix="/recipes", tags=["Recipes"])

@router.get("/")
def get_all_recipes():
  return { "recipes": "all" }
