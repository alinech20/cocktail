<script setup lang="ts">
import RecipeCard from './RecipeCard.vue'
import { useRecipeStore } from '@/stores/recipe'
import { storeToRefs } from 'pinia'

const { filteredRecipes } = storeToRefs(useRecipeStore())
</script>

<template>
  <RecipeCard v-for="recipe in filteredRecipes" :key="recipe.id" :recipe="recipe" />
</template>
