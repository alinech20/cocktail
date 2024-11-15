<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useInfiniteScroll } from '@vueuse/core'
import { useRecipeStore } from '@/stores/recipe'
import RecipeList from '@/components/explore/RecipeList.vue'

const recipeStore = useRecipeStore()
const { filteredRecipes, lastPage } = storeToRefs(recipeStore)
const { loadNextPage } = recipeStore

const recipesContainer = ref<HTMLElement | null>(null)

useInfiniteScroll(recipesContainer, async () => await loadNextPage(), {
  interval: 1000,
  distance: 10,
  canLoadMore: () => !lastPage.value
})

onBeforeMount(() => {
  useRecipeStore().fetchRecipes()
})
</script>

<template>
  <section ref="recipesContainer">
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
