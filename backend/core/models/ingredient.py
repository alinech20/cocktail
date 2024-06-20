from datetime import datetime
from typing import Optional, List

from sqlalchemy import func, event
from sqlalchemy import ForeignKey
from sqlalchemy import String
from sqlalchemy.orm import mapped_column, Mapped, relationship
from sqlalchemy.schema import CreateSchema

from config.db import Base

# event.listen(Base.metadata, "before_create", CreateSchema("ingredients"))

class IngredientUnit(Base):
  __tablename__ = "units"
  __table_args__ = { "schema": "ingredients" }

  id: Mapped[int] = mapped_column(primary_key=True)
  name: Mapped[str] = mapped_column(String(32))
  abbr: Mapped[str] = mapped_column(String(8))

class IngredientCategory(Base):
  __tablename__ = "categories"
  __table_args__ = { "schema": "ingredients" }

  id: Mapped[int] = mapped_column(primary_key=True)
  name: Mapped[str] = mapped_column(String(16))

  created_at: Mapped[datetime] = mapped_column(server_default=func.current_timestamp())
  modified_at: Mapped[datetime] = mapped_column(server_default=func.current_timestamp())

  ingredients: Mapped[List["Ingredient"]] = relationship(back_populates="category")

class Ingredient(Base):
  __tablename__ = "ingredients"
  __table_args__ = { "schema": "ingredients" }

  id: Mapped[int] = mapped_column(primary_key=True)
  category_id: Mapped[int] = mapped_column(ForeignKey("ingredients.categories.id"))
  name: Mapped[Optional[str]] = mapped_column(String(32))
  photo: Mapped[Optional[str]] = mapped_column(String(256))
  alternative: Mapped[Optional[str]] = mapped_column(String(512))

  created_at: Mapped[datetime] = mapped_column(server_default=func.current_timestamp())
  modified_at: Mapped[datetime] = mapped_column(server_default=func.current_timestamp())

  category: Mapped["IngredientCategory"] = relationship(back_populates="ingredients")


