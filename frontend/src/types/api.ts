export interface IApiParams {
  recipeId?: number
}

export interface IApiPath {
  url: string
  params?: IApiParams
}
