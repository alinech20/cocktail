import { useApiRequest } from '@/composables/useApiRequest'
import { useLogger } from '@/composables/useLogger'
import { ENDPOINTS, PINIA_STORE_KEYS } from '@/constants'
import type { IRecipe } from '@/types/recipes'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useRecipeStore = defineStore(PINIA_STORE_KEYS.RECIPE, () => {
  const { info, error: logError } = useLogger()
  const { apiCall } = useApiRequest()

  const searchTerm = ref<string>('')
  const recipes = ref<IRecipe[]>([])

  const filteredRecipes = computed<IRecipe[]>(() => {
    if (searchTerm.value.length < 3) return recipes.value
    return recipes.value.filter((r) =>
      r.title.toLowerCase().includes(searchTerm.value.toLowerCase())
    )
  })

  const fetchRecipes = async () => {
    info('Fetching recipes...')

    const { data, error, onFetchResponse, onFetchError } = apiCall(ENDPOINTS.RECIPES.GET)
      .get()
      .json()

    onFetchResponse(() => {
      recipes.value.push(...data.value)
      info('Recipes fetched successfully!')
    })
    onFetchError(() => logError(error.value))
  }

  return {
    searchTerm,
    recipes,
    filteredRecipes,
    fetchRecipes
  }
})
