<script setup lang="ts">
defineProps<{
  action: () => void
  buttonContent: string
}>()

const model = defineModel()
</script>

<template>
  <article class="input-w-button" @keyup.enter="action">
    <input class="custom-input input-w-button__input" v-model="model" type="text" />
    <button class="input-w-button__button" @click="action">
      {{ buttonContent }}
    </button>
  </article>
</template>

<style lang="scss" scoped>
@import '../../../styles/variables/sizes.css';

.input-w-button {
  display: flex;

  &__input {
    width: 100%;
    border-right: none;
  }

  &__button {
    width: 200px;
    border-top-right-radius: var(--custom-input-border-radius);
    border-bottom-right-radius: var(--custom-input-border-radius);
    border-left: none;
  }
}
</style>
