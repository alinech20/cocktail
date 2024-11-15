export interface IRecipeApiParams {
  recipeId?: number
}

type TApiParams = IRecipeApiParams

export interface IRecipeApiQueryParams {
  name?: string
  page?: number
  size?: number
}

type TApiQueryParams = IRecipeApiQueryParams

export interface IApiPath {
  url: string
  params?: TApiParams
  query?: TApiQueryParams
}
