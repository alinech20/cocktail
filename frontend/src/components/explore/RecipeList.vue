<script setup lang="ts">
import type { IRecipe } from '@/types/recipes'
import RecipeCard from './RecipeCard.vue'
import NoResultsIcon from '~icons/mdi/emoticon-confused-outline'

defineProps<{
  recipes: IRecipe[]
}>()
</script>

<template>
  <div>
    <section class="recipes-container" v-if="recipes.length > 0">
      <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </section>
    <section class="no-results" v-else>
      <NoResultsIcon class="no-results__icon" />
      <h3>Uhm... We didn't find anything. Try searching for something else!</h3>
    </section>
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

.no-results {
  text-align: center;
  position: absolute;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  color: var(--primary-color);

  &__icon {
    font-size: 10rem;
  }
}
</style>
