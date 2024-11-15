<script setup lang="ts">
import SearchRecipe from '@/components/explore/SearchRecipe.vue'
</script>

<template>
  <section class="header__content">
    <SearchRecipe />
  </section>
</template>

<style lang="scss">
.header__content {
  max-width: var(--max-content-width);

  .search-recipe {
    margin: 0 auto;

    // --tablet-screen
    @media only screen and (min-width: 769px) {
      max-width: var(--recipe-card-width);
    }
  }
}
</style>
