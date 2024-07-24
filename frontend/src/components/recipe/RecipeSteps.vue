<script setup lang="ts">
import type { TNullableOptional } from '@/types/helpers'
import type { IRecipeStep } from '@/types/recipes'
import { computed } from 'vue'

const props = defineProps<{
  steps?: IRecipeStep[]
  note: TNullableOptional<string>
}>()

const orderedSteps = computed<IRecipeStep[]>(() =>
  // @ts-expect-error
  props.steps?.toSorted((a: IRecipeStep, b: IRecipeStep) => a.stepNo - b.stepNo)
)
</script>

<template>
  <article>
    <section class="recipe-steps">
      <h2 class="recipe-steps__title">And follow these simple steps:</h2>
      <ol class="recipe-steps__list">
        <li class="recipe-steps__item" v-for="step in orderedSteps" :key="step.stepNo">
          {{ step.text }}
        </li>
      </ol>
    </section>
    <p v-if="note">
      {{ note }}
    </p>
  </article>
</template>
