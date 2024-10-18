<script setup lang="ts">
import type { TNullableOptional } from '@/types/helpers'

defineProps<{
  image: TNullableOptional<string>
}>()
</script>

<template>
  <article class="recipe-header" :style="`background-image: url(${image});`">
    <img class="recipe-header__image" :src="image || 'https://placehold.co/200x200'" />
  </article>
</template>

<style lang="scss">
.recipe-header {
  background-size: cover;
  background-position: center;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(200px);
  width: 100%;

  &__image {
    display: block;
    max-width: 500px;
    margin: 0 auto;
  }
}
</style>
