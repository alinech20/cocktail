export const API = {
  BASE_URL: '/api/v1/',
  RECIPES: {
    ALL: 'recipes/',
    BY_ID: 'recipes/{recipeId}/',
    FILTER: 'recipes/filter/'
  }
}

export const RECIPE_PAGE_SIZE = 10

export const PINIA_STORE_KEYS = {
  RECIPE: 'Recipe'
}

export const SNACKBAR_DURATION = 5000

export const BUS_EVENTS = {
  SNACKBAR: 'bus-events:snackbar'
}

export const CONSTANTS = {
  RECIPE_PAGE_IMAGE_MAX_WIDTH: 500
}
