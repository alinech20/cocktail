<script setup lang="ts">
import { useScreenSize } from '@/composables/useScreenSize'
import { CONSTANTS } from '@/constants'
import type { TNullableOptional } from '@/types/helpers'
import { computed } from 'vue'

defineProps<{
  image: TNullableOptional<string>
}>()

const { width } = useScreenSize()
const imageMaxSize = CONSTANTS.RECIPE_PAGE_IMAGE_MAX_WIDTH
const overlaySize = computed(() => {
  return width.value > imageMaxSize
    ? {
        w: width.value,
        h: (imageMaxSize * 4) / 3
      }
    : {
        w: 'auto',
        h: 'auto'
      }
})
</script>

<template>
  <article
    class="recipe-header"
    :style="width > imageMaxSize ? `background-image: url(${image});` : ''"
  >
    <section
      class="recipe-header__overlay"
      :style="
        width > imageMaxSize ? `min-width: ${overlaySize.w}px; min-height: ${overlaySize.h}px;` : ''
      "
    >
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
