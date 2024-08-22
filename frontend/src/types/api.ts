export interface IApiParams {
  recipeId?: number
}

export interface IRecipeApiQueryParams {
  name?: string
  page?: number
  size?: number
}

export interface IApiPath {
  url: string
  params?: IApiParams
  query?: IRecipeApiQueryParams
}
