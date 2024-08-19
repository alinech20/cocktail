export interface IApiParams {
  recipeId?: number
}

export interface IRecipeApiQueryParams {
  name?: string
}

export interface IApiPath {
  url: string
  params?: IApiParams
  query?: IRecipeApiQueryParams
}
