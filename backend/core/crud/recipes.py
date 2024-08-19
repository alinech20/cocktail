from sqlalchemy import and_, or_, func, any_
from sqlalchemy.orm import Session

from core.models.recipe import Recipe, RecipeIngredient
from core.models.ingredient import Ingredient

def get_many_where(name: str | None, ing: list[str] | None, page: int, size: int, db: Session):
  skip = (page - 1) * size

  query = db.query(Recipe)

  if name != None:
    query = query.filter(Recipe.title.icontains(name))

  # if ing != None and len(ing) > 0:
    # query = query.join(Ingredient, Recipe.ingredients).filter(Ingredient.name.in_(ing))
    # query = query.join(Recipe.ingredients).join(RecipeIngredient.ingredient).filter(and_(Ingredient.name.in_(ing)))
    # query = query.join(Recipe.ingredients).join(RecipeIngredient.ingredient).filter(and_(*[Ingredient.name.icontains(i) for i in ing]))
    # query = query.join(Recipe.ingredients).join(RecipeIngredient.ingredient).filter(Ingredient.name == any_(ing))
    # query = query.join(Recipe.ingredients).join(RecipeIngredient.ingredient).filter(Ingredient.name.in_(ing))
  
  # for i in ing:
    # query = query.join(Recipe.ingredients).join(RecipeIngredient.ingredient).filter(func.lower(Ingredient.name).in_(i.lower()))
    # query = query.join(Recipe.ingredients).join(RecipeIngredient.ingredient).filter()

  # print(query)

  return query.offset(skip).limit(size).all()

def get_all(db: Session, page: int, size: int):
  skip = (page - 1) * size
  return db.query(Recipe).offset(skip).limit(size).all()

def get_one_by_id(id: int, db: Session):
  return db.query(Recipe).where(Recipe.id == id).first()
