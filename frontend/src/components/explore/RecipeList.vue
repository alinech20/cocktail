<script setup lang="ts">
import RecipeCard from './RecipeCard.vue'
import { useRecipeStore } from '@/stores/recipe'
import { storeToRefs } from 'pinia'
import { useInfiniteScroll } from '@vueuse/core'
import { ref } from 'vue'

const recipeStore = useRecipeStore()
const { filteredRecipes, lastPage } = storeToRefs(recipeStore)
const { loadNextPage } = recipeStore

const recipesContainer = ref<HTMLElement | null>(null)

useInfiniteScroll(recipesContainer, async () => await loadNextPage(), {
  interval: 500,
  distance: 10,
  canLoadMore: () => !lastPage.value
})
</script>

<template>
  <div>
    <section class="recipes-container" v-if="filteredRecipes.length > 0" ref="recipesContainer">
      <RecipeCard v-for="recipe in filteredRecipes" :key="recipe.id" :recipe="recipe" />
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
  height: calc(100vh - 80px);
  height: calc(100dvh - 80px);

  // --tablet-screen
  @media only screen and (min-width: 768px) {
    // to account for larger .recipe-card vertical margin
    height: calc(100vh - 100px);
    height: calc(100dvh - 100px);
  }
}
</style>
