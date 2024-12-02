from fastapi import APIRouter

from .endpoints import ingredients, recipes

router = APIRouter(prefix="/api/v1")
router.include_router(ingredients.router)
router.include_router(recipes.router)

@router.get("/health")
def hello():
  return { "message": "Hello world!" }
