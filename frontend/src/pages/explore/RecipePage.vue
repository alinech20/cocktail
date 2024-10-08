<script setup lang="ts">
import RecipeHeader from '@/components/recipe/RecipeHeader.vue'
import RecipeIngredients from '@/components/recipe/RecipeIngredients.vue'
import RecipeSteps from '@/components/recipe/RecipeSteps.vue'
import { useRecipeStore } from '@/stores/recipe'
import { storeToRefs } from 'pinia'
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const recipeId = parseInt(route.params.recipeId.toString())

const recipeStore = useRecipeStore()
const { currentRecipe } = storeToRefs(recipeStore)
const { setCurrentRecipe } = recipeStore

onBeforeMount(() => {
  setCurrentRecipe(recipeId)
  // recipeStore.fetchRecipeById(recipeId)
})
</script>

<template>
  <section class="recipe">
    <RecipeHeader :title="currentRecipe?.title" :image="currentRecipe?.photo" />
    <section class="recipe__details">
      <p v-if="currentRecipe?.note">
        {{ currentRecipe.note }}
      </p>
      <RecipeIngredients :ingredients="currentRecipe?.ingredients" />
      <RecipeSteps :steps="currentRecipe?.steps" />
    </section>
  </section>
</template>

<style lang="scss">
.recipe {
  h1,
  h2 {
    color: var(--text-primary);
  }

  &__details {
    padding: 0 var(--large-item-spacer) var(--large-item-spacer);
  }
}
</style>
