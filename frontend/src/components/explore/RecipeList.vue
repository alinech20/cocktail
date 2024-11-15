<script setup lang="ts">
import type { IRecipe } from '@/types/recipes'
import RecipeCard from './RecipeCard.vue'

defineProps<{
  recipes: IRecipe[]
}>()
</script>

<template>
  <div>
    <section class="recipes-container" v-if="recipes.length > 0">
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
  // height: calc(100vh - 80px);
  // height: calc(100dvh - 80px);

  // --tablet-screen
  @media only screen and (min-width: 768px) {
    // to account for larger .recipe-card vertical margin
    // height: calc(100vh - 100px);
    // height: calc(100dvh - 100px);
  }
}
</style>
