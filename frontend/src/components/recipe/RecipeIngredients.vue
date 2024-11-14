<script setup lang="ts">
import type { TNullableOptional } from '@/types/helpers'
import type { IRecipeIngredient } from '@/types/recipes'
import { computed } from 'vue'

const props = defineProps<{
  ingredients?: IRecipeIngredient[]
}>()

const showQuantity = (note: TNullableOptional<string>) =>
  !note || note.toLowerCase() !== 'to garnish'

const orderedIngredients = computed(() => {
  // @ts-expect-error
  return props.ingredients?.toSorted((a: IRecipeIngredient, b: IRecipeIngredient) => {
    if (a.ingredient.category_id < b.ingredient.category_id) return -1
    if (a.ingredient.category_id > b.ingredient.category_id) return 1
    if (a.ingredient.id! < b.ingredient.id!) return -1
    return 1
  })
})
</script>

<template>
  <section class="recipe-ingredients">
    <h2 class="recipe-ingredients__title">You need to have these ingredients:</h2>
    <ul class="recipe-ingredients__list">
      <li
        class="recipe-ingredients__item"
        v-for="ing in orderedIngredients"
        :key="ing.ingredient.id"
      >
        <span v-if="showQuantity(ing.note)">{{ `${ing.quantity}${ing.unit.abbr} ` }}</span>
        <span>{{ ing.ingredient.name }}</span>
        <span v-if="ing.note">{{ ` - ${ing.note}` }}</span>
        <span v-if="ing.ingredient.alternative">
          (alternative: {{ ing.ingredient.alternative }})
        </span>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
.recipe-ingredients {
  padding-top: var(--small-item-spacer);
}
</style>
