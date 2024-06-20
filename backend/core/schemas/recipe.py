from typing import Optional
from pydantic import BaseModel

from .ingredient import Ingredient

class RecipeStepBase(BaseModel):
  recipe_id: int
  step_no: int
  text: str

class RecipeStepCreate(RecipeStepBase):
  pass

class RecipeStep(RecipeStepBase):
  class Config:
    orm_mode = True

class RecipeBase(BaseModel):
  title: str
  photo: Optional[str] = None
  note: Optional[str] = None

class RecipeCreate(RecipeBase):
  pass

class Recipe(RecipeBase):
  id: int

  ingredients: list[Ingredient] = []
  steps: list[RecipeStep] = []

  class Config:
    orm_mode = True
