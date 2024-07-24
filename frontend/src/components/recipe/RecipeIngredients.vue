<script setup lang="ts">
import type { IRecipeIngredient } from '@/types/recipes'

defineProps<{
  ingredients?: IRecipeIngredient[]
}>()
</script>

<template>
  <article>
    <section class="recipe-ingredients">
      <h2 class="recipe-ingredients__title">You need these ingredients:</h2>
      <ul class="recipe-ingredients__list">
        <li class="recipe-ingredients__item" v-for="ing in ingredients" :key="ing.id">
          {{ `${ing.quantity}${ing.unit.abbr} ${ing.name}` }}
          <span v-if="ing.note">- {{ ing.note }}</span>
          <span v-if="ing.alternative">(alternative: {{ ing.alternative }})</span>
        </li>
      </ul>
    </section>
  </article>
</template>
