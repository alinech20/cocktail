<script setup lang="ts">
import type { IRecipeStep } from '@/types/recipes'
import { computed } from 'vue'

const props = defineProps<{
  steps?: IRecipeStep[]
}>()

const orderedSteps = computed<IRecipeStep[]>(() =>
  // @ts-expect-error
  props.steps?.toSorted((a: IRecipeStep, b: IRecipeStep) => a.stepNo - b.stepNo)
)
</script>

<template>
  <section class="recipe-steps">
    <h2 class="recipe-steps__title">And to follow these simple steps:</h2>
    <ol class="recipe-steps__list">
      <li class="recipe-steps__item" v-for="step in orderedSteps" :key="step.step_no">
        {{ step.text }}
      </li>
    </ol>
  </section>
</template>

<style lang="scss">
.recipe-steps {
  padding-top: var(--small-item-spacer);
}
</style>
