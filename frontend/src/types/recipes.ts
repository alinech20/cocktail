import type { TNullableOptional } from './helpers'

export interface ICategory {
  id?: number
  name: string
}

export interface IIngredient {
  id?: number
  // category: ICategory
  category_id: number
  name: string
  alternative: TNullableOptional<string>
  photo: TNullableOptional<string>
}

export interface IIngredientUnit {
  id?: number
  name: string
  abbr: string
}

export interface IRecipeStep {
  step_no: number
  text: string
}

export interface IRecipeIngredient {
  quantity: number
  note: TNullableOptional<string>
  unit: IIngredientUnit
  ingredient: IIngredient
}

export interface IRecipe {
  id?: number
  title: string
  note: TNullableOptional<string>
  photo: TNullableOptional<string>
  ingredients: IRecipeIngredient[]
  steps: IRecipeStep[]
}
