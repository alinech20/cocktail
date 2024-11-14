<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useRecipeStore } from '@/stores/recipe'
import RecipeList from '@/components/explore/RecipeList.vue'

onBeforeMount(() => {
  useRecipeStore().fetchRecipes()
})
</script>

<template>
  <section>
    <h2 v-if="false">Recipe List</h2>
    <RecipeList class="recipe-list" />
  </section>
</template>

<style lang="scss">
.recipe-list {
  max-width: var(--max-content-width);
  margin: 0 auto;
}
</style>
