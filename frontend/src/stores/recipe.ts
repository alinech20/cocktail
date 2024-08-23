import { useApiRequest } from '@/composables/useApiRequest'
import { useLogger } from '@/composables/useLogger'
import { API, PINIA_STORE_KEYS, RECIPE_PAGE_SIZE } from '@/constants'
import type { IRecipeApiQueryParams } from '@/types/api'
import type { IRecipe } from '@/types/recipes'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useRecipeStore = defineStore(PINIA_STORE_KEYS.RECIPE, () => {
  const { info, error: logError } = useLogger()
  const currentPage = computed(() => Math.ceil(filteredRecipes.value.length / RECIPE_PAGE_SIZE))
  const lastPage = ref(false)

  const searchTerm = ref<string>('')
  const filteredRecipes = ref<IRecipe[]>([])
  const filterRecipes = async (refresh = false, addPage = false) => {
    info('Fetching filtered recipes...')

    if (!searchTerm.value && !refresh && !addPage) {
      info('No search term available, returning all recipes')
      filteredRecipes.value = recipes.value
      return
    }

    if (!addPage) filteredRecipes.value.length = 0

    const apiRequest = useApiRequest({
      url: API.RECIPES.FILTER,
      query: {
        name: searchTerm.value,
        page: currentPage.value + 1
      } as IRecipeApiQueryParams
    })

    const { data, error, onFetchResponse, onFetchError } = apiRequest.get().json()

    onFetchResponse(() => {
      info('Got response from server')
      if (data.value.length === 0) return (lastPage.value = true)

      filteredRecipes.value.push(...data.value)

      if (currentPage.value !== filteredRecipes.value.length / RECIPE_PAGE_SIZE)
        lastPage.value = true

      info('Recipes filtered successfully!')
    })
    onFetchError(() => logError(error.value))
  }

  const recipes = ref<IRecipe[]>([])
  const fetchRecipes = async (refresh = false, addPage = false) => {
    info('Fetching recipes...')

    if (recipes.value.length && !refresh && !addPage) {
      info('Recipes already available')
      return
    }

    if (!addPage) recipes.value.length = 0

    const apiRequest = useApiRequest({
      url: API.RECIPES.ALL,
      query: {
        page: currentPage.value + 1
      } as IRecipeApiQueryParams
    })

    const { data, error, onFetchResponse, onFetchError } = apiRequest.get().json()

    onFetchResponse(() => {
      info('Got response from server')
      if (data.value.length === 0) return (lastPage.value = true)

      searchTerm.value = ''
      recipes.value.push(...data.value)
      filteredRecipes.value.push(...data.value)

      if (currentPage.value !== filteredRecipes.value.length / RECIPE_PAGE_SIZE)
        lastPage.value = true

      info('Recipes fetched successfully!')
    })
    onFetchError(() => logError(error.value))
  }

  const loadNextPage = async () => {
    info('Getting next page of recipes...')
    if (lastPage.value) {
      info('Already on the last page')
      return
    }

    if (!searchTerm.value) fetchRecipes(false, true)
    else filterRecipes(false, true)
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
    info(`Fetching recipe with id ${id}...`)

    if (currentRecipe.value?.id === id && !refresh) {
      info(`Recipe with id ${id} already available!`)
      return
    }

    currentRecipe.value = undefined

    const { data, error, onFetchResponse, onFetchError } = useApiRequest({
      url: API.RECIPES.BY_ID,
      params: {
        recipeId: id
      }
    })
      .get()
      .json()

    onFetchResponse(() => {
      info('Got response from server')
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

    lastPage,
    loadNextPage,

    currentRecipe,
    setCurrentRecipe
    // fetchRecipeById
  }
})
