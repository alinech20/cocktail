<script setup lang="ts">
import type { IIngredient } from '@/types/recipes'

defineProps<{
  ingredients?: IIngredient[]
}>()
</script>

<template>
  <article>
    <section class="recipe-ingredients">
      <h2 class="recipe-ingredients__title">You need these ingredients:</h2>
      <ul class="recipe-ingredients__list">
        <li class="recipe-ingredients__item" v-for="ing in ingredients" :key="ing.id">
          {{ ing.name }} <span v-if="ing.alternative">(alternative: {{ ing.alternative }})</span>
        </li>
      </ul>
    </section>
  </article>
</template>
