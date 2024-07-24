import { useApiRequest } from '@/composables/useApiRequest'
import { useLogger } from '@/composables/useLogger'
import { API, PINIA_STORE_KEYS } from '@/constants'
import type { IRecipe, IRecipeIngredient, IRecipeStep } from '@/types/recipes'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useRecipeStore = defineStore(PINIA_STORE_KEYS.RECIPE, () => {
  const { info, error: logError } = useLogger()

  const searchTerm = ref<string>('')
  const recipes = ref<IRecipe[]>([])

  const initRecipe = (data: any) => {
    const { id, title, note, photo } = data
    const steps: IRecipeStep[] = data.steps.map((s: any) => ({
      stepNo: s.step_no,
      text: s.text
    }))
    const ingredients: IRecipeIngredient[] = data.recipe_ingredients.map((i: any) => ({
      id: i.ingredient.id,
      category: {
        id: i.ingredient.category.id,
        name: i.ingredient.category.name
      },
      name: i.ingredient.name,
      alternative: i.ingredient.alternative,
      photo: i.ingredient.photo,
      note: i.note,
      quantity: i.quantity,
      unit: {
        id: i.unit.id,
        name: i.unit.name,
        abbr: i.unit.abbr
      }
    }))

    return {
      id,
      title,
      note,
      photo,
      steps,
      ingredients
    }
  }

  const fetchRecipes = async (refresh = false) => {
    if (recipes.value.length && !refresh) {
      info('Recipes already available')
      return
    }

    info('Fetching recipes...')

    const { data, error, onFetchResponse, onFetchError } = useApiRequest(API.RECIPES).get().json()

    onFetchResponse(() => {
      recipes.value.length = 0
      for (const r of data.value) recipes.value.push(initRecipe(r))
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
      currentRecipe.value = initRecipe(data.value)
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
