<script setup lang="ts">
import { router } from '@/router'
import RecipeCard from './RecipeCard.vue'
import { useRecipeStore } from '@/stores/recipe'
import { storeToRefs } from 'pinia'

const { filteredRecipes } = storeToRefs(useRecipeStore())
const goToRecipe = (id: number) => router.push({ path: `/recipes/${id}` })
</script>

<template>
  <section v-if="filteredRecipes.length > 0">
    <RecipeCard
      v-for="recipe in filteredRecipes"
      :key="recipe.id"
      :recipe="recipe"
      @click="goToRecipe(recipe.id!)"
    />
  </section>
  <h3 v-else class="no-results">There are no recipes matching your search :(</h3>
</template>
