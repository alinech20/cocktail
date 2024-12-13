<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia'
import { useRecipeStore } from '@/stores/recipe'
import RecipeList from '@/components/explore/RecipeList.vue'

const recipeStore = useRecipeStore()
const { filteredRecipes } = storeToRefs(recipeStore)

onBeforeMount(() => {
  useRecipeStore().fetchRecipes()
})
</script>

<template>
  <section>
    <h2 v-if="false">Recipe List</h2>
    <RecipeList class="recipe-list" :recipes="filteredRecipes" />
  </section>
</template>

<style lang="scss">
.recipe-list {
  max-width: var(--max-content-width);
  margin: 0 auto;
}
</style>
