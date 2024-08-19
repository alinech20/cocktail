import { useApiRequest } from '@/composables/useApiRequest'
import { useLogger } from '@/composables/useLogger'
import { API, PINIA_STORE_KEYS } from '@/constants'
import type { IRecipeApiQueryParams } from '@/types/api'
import type { IRecipe } from '@/types/recipes'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRecipeStore = defineStore(PINIA_STORE_KEYS.RECIPE, () => {
  const { info, error: logError } = useLogger()

  const searchTerm = ref<string>('')
  const filteredRecipes = ref<IRecipe[]>([])
  const filterRecipes = async () => {
    if (!searchTerm.value) {
      filteredRecipes.value = recipes.value
      return
    }

    info('Fetching filtered recipes...')

    const { data, error, onFetchResponse, onFetchError } = useApiRequest({
      url: API.RECIPES.FILTER,
      query: {
        name: searchTerm.value
      } as IRecipeApiQueryParams
    })
      .get()
      .json()

    onFetchResponse(() => {
      filteredRecipes.value.length = 0
      filteredRecipes.value.push(...data.value)
      info('Recipes filtered successfully!')
    })
    onFetchError(() => logError(error.value))
  }

  const recipes = ref<IRecipe[]>([])
  const fetchRecipes = async (refresh = false) => {
    if (recipes.value.length && !refresh) {
      info('Recipes already available')
      return
    }

    recipes.value.length = 0

    info('Fetching recipes...')

    const { data, error, onFetchResponse, onFetchError } = useApiRequest(API.RECIPES.ALL)
      .get()
      .json()

    onFetchResponse(() => {
      searchTerm.value = ''
      recipes.value.push(...data.value)
      filteredRecipes.value.push(...data.value)
      info('Recipes fetched successfully!')
    })
    onFetchError(() => logError(error.value))
  }

  const currentRecipe = ref<IRecipe>()
  const setCurrentRecipe = async (id: number) => {
    info(`Setting recipe with id ${id} as current recipe...`)

    if (currentRecipe.value?.id === id)
      return info(`Recipe with id ${id} already set as current recipe`)

    if (!recipes.value.length) return fetchRecipeById(id)

    currentRecipe.value = recipes.value.find((r) => r.id === id)

    info(`Recipe with id ${id} set as current recipe!`)
  }

  const fetchRecipeById = async (id: number, refresh = false) => {
    if (currentRecipe.value?.id === id && !refresh) {
      info(`Recipe with id ${id} already available!`)
      return
    }

    currentRecipe.value = undefined

    info(`Fetching recipe with id ${id}...`)

    const { data, error, onFetchResponse, onFetchError } = useApiRequest({
      url: API.RECIPES.BY_ID,
      params: {
        recipeId: id
      }
    })
      .get()
      .json()

    onFetchResponse(() => {
      currentRecipe.value = data.value
      info(`Recipe with id ${id} fetched successfully!`)
    })
    onFetchError(() => logError(error.value))
  }

  return {
    searchTerm,
    filteredRecipes,
    filterRecipes,

    recipes,
    fetchRecipes,

    currentRecipe,
    setCurrentRecipe
    // fetchRecipeById
  }
})
