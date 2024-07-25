<script setup lang="ts">
import type { TNullableOptional } from '@/types/helpers'
import { computed } from 'vue'

const props = defineProps<{
  title?: string
  image: TNullableOptional<string>
}>()

const prefix = computed(() => {
  const vowels = ['a', 'e', 'i', 'o', 'u']

  if (!props.title) return 'a'

  if (vowels.includes(props.title.charAt(0).toLowerCase())) return 'an'
  return 'a'
})
</script>

<template>
  <article class="recipe-header">
    <img class="recipe-header__image" :src="image || 'https://placehold.co/200x200'" />
    <h1 class="recipe-header__title">How to make {{ prefix }} {{ title }} cocktail</h1>
  </article>
</template>

<style lang="scss">
@use '../../styles/variables/spacing.scss';
@use '../../styles/variables/sizes.scss';

.recipe-header {
  margin: -(spacing.$MainContentPadding);

  &__image {
    width: 100%;
    max-height: 500px;
  }

  &__title {
    text-align: center;
    font-size: sizes.$RecipePageTitleSize;
    margin-left: spacing.$MediumItemSpacer;
    margin-right: spacing.$MediumItemSpacer;
  }
}
</style>
