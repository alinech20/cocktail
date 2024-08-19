from typing import Optional
from datetime import datetime
from pydantic import BaseModel

class IngredientUnitBase(BaseModel):
  name: str
  abbr: str

class IngredientUnitCreate(IngredientUnitBase):
  pass

class IngredientUnit(IngredientUnitBase):
  id: int

  class Config:
    from_attributes = True

class IngredientCategoryBase(BaseModel):
  name: str

class IngredientCategoryCreate(IngredientCategoryBase):
  pass

class IngredientCategory(IngredientCategoryBase):
  id: int
  # ingredients: list["Ingredient"] = []
  created_at: datetime
  modified_at: datetime

  class Config:
    from_attributes = True

class IngredientBase(BaseModel):
  category_id: int
  name: str
  photo: Optional[str] = None
  alternative: Optional[str] = None

class IngredientCreate(IngredientBase):
  pass

class Ingredient(IngredientBase):
  id: int
  category: IngredientCategory

  class Config:
    from_attributes = True
