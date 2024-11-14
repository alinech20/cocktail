<script setup lang="ts">
import type { TNullableOptional } from '@/types/helpers'

defineProps<{
  image: TNullableOptional<string>
}>()
</script>

<template>
  <article class="recipe-header" :style="`background-image: url(${image});`">
    <section class="recipe-header__overlay">
      <img class="recipe-header__image" :src="image || 'https://placehold.co/200x200'" />
    </section>
  </article>
</template>

<style lang="scss">
.recipe-header {
  background-size: cover;
  background-position: center;

  &__overlay {
    width: 100%;
    height: 100%;
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
  }

  &__image {
    display: block;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
}
</style>
