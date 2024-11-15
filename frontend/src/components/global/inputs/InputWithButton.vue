<script setup lang="ts">
import type { Component } from 'vue'
import CustomButton from './CustomButton.vue'

defineProps<{
  action: () => void
  placeholder: string
  buttonContent: string | Component
}>()

const model = defineModel()
</script>

<template>
  <article class="input-w-button" @keyup.enter="action">
    <input
      class="custom-input input-w-button__input"
      v-model="model"
      type="text"
      :placeholder="placeholder"
    />
    <CustomButton class="input-w-button__button" @click="action" :buttonContent="buttonContent" />
  </article>
</template>

<style lang="scss">
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
      font-size: 1.25rem;
    }
  }
}
</style>
