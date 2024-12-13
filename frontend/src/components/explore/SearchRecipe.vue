<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe'
import InputWithButton from '../global/inputs/InputWithButton.vue'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

import SearchIcon from '~icons/mdi/magnify'

const recipeStore = useRecipeStore()
const { searchTerm } = storeToRefs(recipeStore)
const { filterRecipes } = recipeStore
const hideInput = ref(true)

const setHideInput = (val: boolean) => (hideInput.value = val)

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
      @set-hide-input="setHideInput"
    />
  </section>
</template>

<style lang="scss">
.search-recipe {
  padding: var(--small-item-spacer);
  width: 100%;

  &.input-hidden {
    width: auto;
  }

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

    &:hover {
      opacity: var(--faded-text);
    }
  }
}
</style>
