<script setup lang="ts">
import type { IRecipe } from '@/types/recipes'
import { computed } from 'vue'

const props = defineProps<{
  recipe: IRecipe
}>()

const ingredientsSummary = computed(() => {
  const ingString = props.recipe.ingredients
    .slice(0, 4)
    .map((i) => i.ingredient.name)
    .join(', ')

  if (props.recipe.ingredients.length > 4) return ingString + ' and more...'
  return ingString
})

const getResizedPhoto = (photo: string) => {
  if (photo.includes('placehold')) return photo

  const pathSlices = photo.split('upload/')
  return `${pathSlices[0]}upload/w_120/${pathSlices[1]}`
}
</script>

<template>
  <article class="recipe-card">
    <section
      class="recipe-card__image-wrapper"
      :style="`background-image: url(${getResizedPhoto(recipe.photo || 'https://placehold.co/120x120')});`"
    ></section>
    <section class="recipe-card__details">
      <h2 class="recipe-card__title">
        {{ recipe.title }}
      </h2>
      <p class="recipe-card__ingredients-summary">
        {{ ingredientsSummary }}
      </p>
    </section>
  </article>
</template>

<style lang="scss">
.recipe-card {
  display: flex;
  height: var(--recipe-card-height);
  margin: var(--small-item-spacer) 0;
  background-color: var(--primary-color);
  color: var(--text-on-primary);
  border-radius: var(--recipe-card-border-radius);

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  &__image-wrapper {
    flex: 0 0 120px;
    background-position: top;
    background-size: cover;
    border-top-left-radius: var(--recipe-card-border-radius);
    border-bottom-left-radius: var(--recipe-card-border-radius);
  }

  &__details {
    padding: var(--small-item-spacer) var(--medium-item-spacer);
  }

  &__title {
    margin: 0;
    font-size: 1.2rem;
  }

  &__ingredients-summary {
    line-height: var(--tight-line-height);
    opacity: var(--faded-text);
  }
}
</style>
