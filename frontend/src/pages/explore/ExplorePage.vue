<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useRecipeStore } from '@/stores/recipe'
import RecipeList from '@/components/explore/RecipeList.vue'
import SearchRecipe from '@/components/explore/SearchRecipe.vue'

onBeforeMount(() => {
  useRecipeStore().fetchRecipes()
})
</script>

<template>
  <section>
    <SearchRecipe />
    <!-- <hr class="separator" /> -->
    <RecipeList />
  </section>
</template>

<style lang="scss">
.separator {
  margin: var(--small-item-spacer) 0;
  border-color: var(--primary-color);
  border-style: solid;
}
</style>
