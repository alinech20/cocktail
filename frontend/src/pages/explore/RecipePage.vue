<script setup lang="ts">
import RecipeImage from '@/components/recipe/RecipeImage.vue'
import RecipeIngredients from '@/components/recipe/RecipeIngredients.vue'
import RecipeSteps from '@/components/recipe/RecipeSteps.vue'
import { useRecipeStore } from '@/stores/recipe'
import { storeToRefs } from 'pinia'
import { onBeforeMount, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const recipeId = parseInt(route.params.recipeId.toString())

const recipeStore = useRecipeStore()
const { currentRecipe } = storeToRefs(recipeStore)
const { setCurrentRecipe } = recipeStore

const prefix = computed(() => {
  const vowels = ['a', 'e', 'i', 'o', 'u']

  if (!currentRecipe.value?.title) return 'a'
  if (vowels.includes(currentRecipe.value.title.charAt(0).toLowerCase())) return 'an'

  return 'a'
})

onBeforeMount(() => {
  setCurrentRecipe(recipeId)
  // recipeStore.fetchRecipeById(recipeId)
})
</script>

<template>
  <section class="recipe">
    <RecipeImage :image="currentRecipe?.photo" />
    <section class="recipe__details">
      <h1 class="recipe__title">How to make {{ prefix }} {{ currentRecipe?.title }} cocktail</h1>
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
    max-width: 960px;
    margin: 0 auto;
    padding: var(--large-item-spacer);
  }

  &__title {
    text-align: center;
    // font-size: var(--recipe-page-title-size);
    margin-left: var(--medium-item-spacer);
    margin-right: var(--medium-item-spacer);
  }
}
</style>
