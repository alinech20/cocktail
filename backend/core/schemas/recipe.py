from typing import Optional
from pydantic import BaseModel
from datetime import datetime

from .ingredient import IngredientUnit

class RecipeIngredientBase(BaseModel):
  recipe_id: int
  ingredient_id: int
  unit_id: int
  quantity: float
  note: Optional[str]

class RecipeIngredientCreate(RecipeIngredientBase):
  pass

class RecipeIngredient(RecipeIngredientBase):
  unit: IngredientUnit
  created_at: datetime
  modified_at: datetime

  class Config:
    orm_mode = True

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
  ingredients: list[RecipeIngredient] = []
  steps: list[RecipeStep] = []
  created_at: datetime
  modified_at: datetime

  class Config:
    orm_mode = True
