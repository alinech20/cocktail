<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  action: () => void
  buttonContent: string | Component
}>()

const model = defineModel()
</script>

<template>
  <article class="input-w-button" @keyup.enter="action">
    <input class="custom-input input-w-button__input" v-model="model" type="text" />
    <button class="input-w-button__button" @click="action">
      <span v-if="typeof buttonContent === 'string'">
        {{ buttonContent }}
      </span>
      <component v-else class="button__icon" :is="buttonContent"></component>
    </button>
  </article>
</template>

<style lang="scss" scoped>
.input-w-button {
  display: flex;
  width: 100%;

  &__input {
    width: 100%;
    border-top-left-radius: var(--custom-input-border-radius);
    border-bottom-left-radius: var(--custom-input-border-radius);
    border-right: none;
  }

  &__button {
    border-top-right-radius: var(--custom-input-border-radius);
    border-bottom-right-radius: var(--custom-input-border-radius);
    border-left: none;

    .button__icon {
      font-size: 1.5rem;
    }
  }
}
</style>
