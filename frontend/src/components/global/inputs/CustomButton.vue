<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  buttonContent: string | Component
}>()
</script>

<template>
  <button class="custom-button">
    <span v-if="typeof buttonContent === 'string'">
      {{ buttonContent }}
    </span>
    <component v-else class="button__icon" :is="buttonContent"></component>
  </button>
</template>

<style lang="scss">
.custom-button {
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  border: none;
  cursor: pointer;

  background-color: var(--white);
}
</style>
