<script setup lang="ts">
import type { IRecipe } from '@/types/recipes'
import { computed } from 'vue'

const props = defineProps<{
  recipe: IRecipe
}>()

const ingredientsSummary = computed(() => props.recipe.ingredients.map((i) => i.name).join(', '))
</script>

<template>
  <article class="recipe-card">
    <section class="recipe-card__image-wrapper">
      <img class="recipe-card__image" :src="recipe.photo || 'https://placehold.co/120x120'" />
    </section>
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
@use '../../styles/variables/sizes.scss';
@use '../../styles/variables/spacing.scss';

.recipe-card {
  display: flex;
  height: sizes.$RecipeCardHeight;
  margin: spacing.$SmallItemSpacer 0;

  &__details {
    padding: 10px;
  }

  &__title {
    margin: 0;
    font-size: 1.125rem;
  }
}
</style>
