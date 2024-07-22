import type { TNullableOptional } from './helpers'

export interface ICategory {
  id?: number
  name: string
}

export interface IIngredient {
  id?: number
  categoryId: number
  name: string
  alternative: TNullableOptional<string>
  photo: TNullableOptional<string>
}

export interface IRecipeStep {
  stepNo: number
  text: string
}

export interface IRecipe {
  id?: number
  title: string
  note: TNullableOptional<string>
  photo: TNullableOptional<string>
  ingredients: IIngredient[]
  steps: IRecipeStep[]
}
