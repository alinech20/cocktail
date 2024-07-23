<script setup lang="ts">
import SearchBar from '../global/inputs/SearchBar.vue'
</script>

<template>
  <section class="search-recipe">
    <SearchBar class="search-recipe__input" placeholder="Search recipes..." />
  </section>
</template>

<style lang="scss">
.search-recipe {
  display: flex;
}
</style>
