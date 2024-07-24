import { useApiRequest } from '@/composables/useApiRequest'
import { useLogger } from '@/composables/useLogger'
import { API, PINIA_STORE_KEYS } from '@/constants'
import type { IRecipe } from '@/types/recipes'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useRecipeStore = defineStore(PINIA_STORE_KEYS.RECIPE, () => {
  const { info, error: logError } = useLogger()

  const searchTerm = ref<string>('')
  const recipes = ref<IRecipe[]>([])

  const fetchRecipes = async (refresh = false) => {
    if (recipes.value.length && !refresh) {
      info('Recipes already available')
      return
    }

    info('Fetching recipes...')

    const { data, error, onFetchResponse, onFetchError } = useApiRequest(API.RECIPES).get().json()

    onFetchResponse(() => {
      recipes.value.length = 0
      recipes.value.push(...data.value)
      info('Recipes fetched successfully!')
    })
    onFetchError(() => logError(error.value))
  }

  const filteredRecipes = computed<IRecipe[]>(() => {
    if (searchTerm.value.length < 3) return recipes.value

    info('Filtering recipes based on the search term')
    return recipes.value.filter((r) =>
      r.title.toLowerCase().includes(searchTerm.value.toLowerCase())
    )
  })

  const currentRecipe = ref<IRecipe>()

  const fetchRecipeById = async (id: number) => {
    info(`Fetching recipe with id ${id}...`)

    const { data, error, onFetchResponse, onFetchError } = useApiRequest({
      url: API.RECIPE_BY_ID,
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
    recipes,
    fetchRecipes,

    filteredRecipes,
    currentRecipe,
    fetchRecipeById
  }
})
