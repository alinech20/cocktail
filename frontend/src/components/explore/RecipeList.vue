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
  <h2 v-if="false">Recipe List</h2>
  <section class="recipes-container" v-if="filteredRecipes.length > 0" ref="recipesContainer">
    <RecipeCard v-for="recipe in filteredRecipes" :key="recipe.id" :recipe="recipe" />
  </section>
  <h3 v-else class="no-results">There are no recipes matching your search :(</h3>
</template>

<style lang="scss">
.recipes-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  overflow-y: auto;
  height: calc(100vh - 62px);
  height: calc(100dvh - 62px);
}
</style>
