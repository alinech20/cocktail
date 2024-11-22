<script setup lang="ts">
import type { IRecipe } from '@/types/recipes'
import { computed } from 'vue'
import { router } from '@/router'
import RecipeIcon from '~icons/mdi/format-list-bulleted-square'
import CustomButton from '../global/inputs/CustomButton.vue'

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
  return `${pathSlices[0]}upload/w_300/${pathSlices[1]}`
}
</script>

<template>
  <article class="recipe-card">
    <section class="recipe-card__header" @click="goToRecipe(recipe.id!)">
      <img
        class="recipe-card__image"
        :src="getResizedPhoto(recipe.photo || 'https://placehold.co/300x150')"
      />
      <!--  -->
    </section>
    <section class="recipe-card__content">
      <article class="recipe-card__info">
        <h2 class="recipe-card__title" @click="goToRecipe(recipe.id!)">
          {{ recipe.title }}
        </h2>
        <p class="recipe-card__ingredients-summary">
          {{ ingredientsSummary }}
        </p>
      </article>
      <article class="recipe-card__actions">
        <CustomButton
          class="btn--tight btn--primary recipe-card__see"
          :button-content="RecipeIcon"
          @click="goToRecipe(recipe.id!)"
        />
      </article>
    </section>
  </article>
</template>

<style lang="scss">
.recipe-card {
  width: var(--recipe-card-width);
  margin: var(--small-item-spacer) 0;

  // --tablet-screen
  @media only screen and (min-width: 769px) {
    margin: var(--medium-item-spacer);
  }

  border-radius: var(--recipe-card-border-radius);
  // box-shadow: var(--slight-shadow);
  box-shadow: var(--soft-shadow-primary);
  background-color: var(--white);

  &__header,
  &__title,
  &__see {
    cursor: pointer;
  }

  &__header {
    position: relative;
    height: calc(var(--recipe-card-width) / 2);

    border-top-left-radius: var(--recipe-card-border-radius);
    border-top-right-radius: var(--recipe-card-border-radius);

    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;

    object-fit: cover;
    border-radius: inherit;

    transition: transform 0.15s ease-out;

    &:hover {
      transform: scale(1.15);
      width: 100%;
      height: 100%;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    // height is 100% - image area - vertical padding
    height: calc(100% - calc(var(--recipe-card-width) / 2) - calc(2 * var(--small-item-spacer)));
    padding: var(--small-item-spacer) var(--medium-item-spacer);
    border-bottom-left-radius: var(--recipe-card-border-radius);
    border-bottom-right-radius: var(--recipe-card-border-radius);
  }

  &__title {
    margin: 0;
    color: var(--text-primary);

    &:hover {
      opacity: var(--faded-text);
    }
  }

  &__ingredients-summary {
    line-height: var(--tight-line-height);
    opacity: var(--faded-text);
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
  }

  &__see {
    border-radius: var(--button-border-radius);

    &:hover {
      opacity: var(--faded-text);
    }
  }
}
</style>
