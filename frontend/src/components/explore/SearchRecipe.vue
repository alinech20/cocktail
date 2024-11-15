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
  width: calc(100% - calc(2 * var(--small-item-spacer)));
  // position: relative;
  padding: var(--small-item-spacer);
  background-color: var(--white);
  // box-shadow: var(--slightest-shadow);

  input {
    border: none;
    border-bottom: 2px solid var(--primary-color);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    color: var(--text-main);
    font-weight: 600;

    &:focus {
      outline: none;
    }
  }

  button {
    background-color: var(--primary-color);
    color: var(--text-on-primary);
    border: 2px solid var(--primary-color);
    border-bottom-right-radius: 0;
  }
}
</style>
