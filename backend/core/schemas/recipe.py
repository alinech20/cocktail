from typing import Optional
from pydantic import BaseModel
from datetime import datetime

from .ingredient import IngredientUnit, Ingredient

class RecipeIngredientBase(BaseModel):
  quantity: float
  note: Optional[str]

class RecipeIngredientCreate(RecipeIngredientBase):
  recipe_id: int
  ingredient_id: int
  unit_id: int

class RecipeIngredient(RecipeIngredientBase):
  ingredient: Ingredient
  unit: IngredientUnit
  created_at: datetime
  modified_at: datetime

  class Config:
    from_attributes = True

class RecipeStepBase(BaseModel):
  step_no: int
  text: str

class RecipeStepCreate(RecipeStepBase):
  recipe_id: int

class RecipeStep(RecipeStepBase):
  class Config:
    from_attributes = True

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
    from_attributes = True
