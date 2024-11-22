<script setup lang="ts">
import SearchRecipe from '@/components/explore/SearchRecipe.vue'
import HeaderMenu from '@/components/header/HeaderMenu.vue'
</script>

<template>
  <section class="header__content">
    <HeaderMenu />
    <SearchRecipe />
  </section>
</template>

<style lang="scss">
.header__content {
  display: flex;
  justify-content: space-between;
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
