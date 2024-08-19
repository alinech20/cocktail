<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe'
import InputWithButton from '../global/inputs/InputWithButton.vue'
import { storeToRefs } from 'pinia'

const recipeStore = useRecipeStore()
const { searchTerm } = storeToRefs(recipeStore)
const { filterRecipes } = recipeStore
</script>

<template>
  <section class="search-recipe">
    <InputWithButton
      class="search-recipe__input"
      v-model="searchTerm"
      placeholder="Search recipes..."
      :action="filterRecipes"
      button-content="Search"
    />
  </section>
</template>

<style lang="scss">
.search-recipe {
  display: flex;

  &__input {
    width: 100%;
  }
}
</style>
