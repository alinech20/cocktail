<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe'
import InputWithButton from '../global/inputs/InputWithButton.vue'
import { storeToRefs } from 'pinia'

import SearchIcon from '~icons/mdi/magnify'

const recipeStore = useRecipeStore()
const { searchTerm } = storeToRefs(recipeStore)
const { filterRecipes } = recipeStore

const searchRecipes = () => {
  filterRecipes(true)
}
</script>

<template>
  <section class="search-recipe">
    <InputWithButton
      class="search-recipe__input"
      v-model="searchTerm"
      placeholder="Search recipes..."
      :action="searchRecipes"
      :button-content="SearchIcon"
    />
  </section>
</template>

<style lang="scss">
.search-recipe {
  display: flex;
  padding: var(--small-item-spacer);

  input {
    border: 2px solid var(--accent-color-2);
    background-color: var(--background-color);
    color: var(--text-main);
    font-weight: 600;

    &:focus {
      outline: none;
    }
  }

  button {
    background-color: var(--accent-color-2);
    color: var(--text-on-secondary);
    border: 2px solid var(--accent-color-2);
  }
}
</style>
