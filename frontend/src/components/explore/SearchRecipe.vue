<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe'
import InputWithButton from '../global/inputs/InputWithButton.vue'
import { storeToRefs } from 'pinia'

// @ts-expect-error
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

  input {
    border: 2px solid var(--quaternary-color);
    color: var(--text-quaternary);
    font-weight: 600;

    &:focus {
      outline: none;
    }
  }

  button {
    background-color: var(--quaternary-color);
    color: var(--text-on-quaternary);
    border: 2px solid var(--quaternary-color);
  }
}
</style>
