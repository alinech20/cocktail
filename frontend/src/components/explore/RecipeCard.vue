<script setup lang="ts">
import type { IRecipe } from '@/types/recipes'
import { computed } from 'vue'
import { router } from '@/router'

const props = defineProps<{
  recipe: IRecipe
}>()

const goToRecipe = (id: number) => router.push({ path: `/recipes/${id}` })

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
      @click="goToRecipe(recipe.id!)"
    ></section>
    <section class="recipe-card__details">
      <h2 class="recipe-card__title" @click="goToRecipe(recipe.id!)">
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
  color: var(--primary-color);

  &:first-of-type {
    margin-top: 0;
  }

  &__image-wrapper {
    flex: 0 0 120px;
    background-position: top;
    background-size: cover;
    border-top-right-radius: var(--recipe-card-border-radius);
    border-bottom-right-radius: var(--recipe-card-border-radius);
    box-shadow: var(--slight-elevate-shadow);
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
    color: var(--text-main);
    opacity: var(--faded-text);
  }
}
</style>
