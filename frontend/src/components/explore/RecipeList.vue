<script setup lang="ts">
import type { IRecipe } from '@/types/recipes'
import RecipeCard from './RecipeCard.vue'
import { useRecipeStore } from '@/stores/recipe'
import { useInfiniteScroll } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

defineProps<{
  recipes: IRecipe[]
}>()

const recipeStore = useRecipeStore()
const { lastPage } = storeToRefs(recipeStore)
const { loadNextPage } = recipeStore

const recipesContainer = ref<HTMLElement | null>(null)

useInfiniteScroll(recipesContainer, async () => await loadNextPage(), {
  interval: 1000,
  distance: 10,
  canLoadMore: () => !lastPage.value
})
</script>

<template>
  <div>
    <section ref="recipesContainer" class="recipes-container" v-if="recipes.length > 0">
      <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </section>
    <h3 v-else class="no-results">There are no recipes matching your search :(</h3>
  </div>
</template>

<style lang="scss">
.recipes-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  padding: var(--small-item-spacer) 0;
  height: calc(100vh - var(--posts-header-height) - var(--medium-item-spacer));
  height: calc(100dvh - var(--posts-header-height) - var(--medium-item-spacer));
  overflow-y: auto;

  // --tablet-screen
  @media only screen and (min-width: 768px) {
    // to account for larger .recipe-card vertical margin
    height: calc(100vh - var(--posts-header-height) - var(--large-item-spacer));
    height: calc(100dvh - var(--posts-header-height) - var(--large-item-spacer));
  }
}
</style>
