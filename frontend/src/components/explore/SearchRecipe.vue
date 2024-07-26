<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe'
import SearchBar from '../global/inputs/SearchBar.vue'
import { storeToRefs } from 'pinia'

const { searchTerm } = storeToRefs(useRecipeStore())
</script>

<template>
  <section class="search-recipe">
    <SearchBar class="search-recipe__input" v-model="searchTerm" placeholder="Search recipes..." />
  </section>
</template>

<style lang="scss">
.search-recipe {
  display: flex;
}
</style>
