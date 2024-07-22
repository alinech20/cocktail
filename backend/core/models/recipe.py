from datetime import datetime
from typing import Optional, List

from sqlalchemy import func, event
from sqlalchemy import ForeignKey
from sqlalchemy import String
from sqlalchemy.orm import mapped_column, Mapped, relationship
from sqlalchemy.schema import CreateSchema

from config.db import Base
from .ingredient import IngredientUnit, Ingredient

# event.listen(Base.metadata, "before_create", CreateSchema("recipes"))

class Recipe(Base):
  __tablename__ = "recipes"
  __table_args__ = { "schema": "recipes" }

  id: Mapped[int] = mapped_column(primary_key=True)
  title: Mapped[str] = mapped_column(String(256))
  photo: Mapped[Optional[str]] = mapped_column(String(256))
  note: Mapped[Optional[str]]

  created_at: Mapped[datetime] = mapped_column(server_default=func.current_timestamp())
  modified_at: Mapped[datetime] = mapped_column(onupdate=func.current_timestamp())

  ingredients: Mapped[List[Ingredient]] = relationship(secondary="recipes.recipes_ingredients", lazy="joined")
  steps: Mapped[List["RecipeStep"]] = relationship(lazy="joined")

class RecipeIngredient(Base):
  __tablename__ = "recipes_ingredients"
  __table_args__ = { "schema": "recipes" }

  recipe_id: Mapped[int] = mapped_column(ForeignKey("recipes.recipes.id"), primary_key=True)
  ingredient_id: Mapped[int] = mapped_column(ForeignKey("ingredients.ingredients.id"), primary_key=True)
  unit_id: Mapped[int] = mapped_column(ForeignKey("ingredients.units.id"))
  quantity: Mapped[float]
  note: Mapped[Optional[str]]

  created_at: Mapped[datetime] = mapped_column(server_default=func.current_timestamp())
  modified_at: Mapped[datetime] = mapped_column(onupdate=func.current_timestamp())

  unit: Mapped[IngredientUnit] = relationship(lazy="joined")

class RecipeStep(Base):
  __tablename__ = "recipes_steps"
  __table_args__ = { "schema": "recipes" }

  recipe_id: Mapped[int] = mapped_column(ForeignKey("recipes.recipes.id"), primary_key=True)
  step_no: Mapped[int] = mapped_column(primary_key=True)
  text: Mapped[str]

  created_at: Mapped[datetime] = mapped_column(server_default=func.current_timestamp())
  modified_at: Mapped[datetime] = mapped_column(onupdate=func.current_timestamp())
