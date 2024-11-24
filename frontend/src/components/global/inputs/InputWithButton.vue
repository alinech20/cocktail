<script setup lang="ts">
import { onMounted, onUnmounted, ref, type Component } from 'vue'
import CustomButton from './CustomButton.vue'

const props = defineProps<{
  action: () => void
  placeholder: string
  buttonContent: string | Component
  hideInput?: boolean
}>()

const emits = defineEmits(['setHideInput'])

const model = defineModel()
const showInput = ref(false)

const hideInputOnDocumentClick = () => emits('setHideInput', true)

const buttonClick = () => {
  if (!props.hideInput) return props.action()
  if (!showInput.value) return emits('setHideInput', false)
}

onMounted(() => document.addEventListener('click', hideInputOnDocumentClick))
onUnmounted(() => document.removeEventListener('click', hideInputOnDocumentClick))
</script>

<template>
  <article class="input-w-button" @keyup.enter="action">
    <input
      class="custom-input input-w-button__input"
      :class="{
        hide: hideInput && !showInput
      }"
      v-model="model"
      type="text"
      :placeholder="placeholder"
      @click.stop=""
    />
    <CustomButton
      class="input-w-button__button"
      @click.stop="buttonClick"
      :button-content="buttonContent"
    />
  </article>
</template>

<style lang="scss">
.input-w-button {
  display: flex;
  width: 100%;

  &__input {
    width: 100%;
    padding: var(--custom-input-padding);

    border-top-left-radius: var(--custom-input-border-radius);
    border-bottom-left-radius: var(--custom-input-border-radius);
    border-right: none;

    &.hide {
      width: 0;
      padding: 0;
    }
  }

  &__button {
    height: 40px;
    border-top-right-radius: var(--custom-input-border-radius);
    border-bottom-right-radius: var(--custom-input-border-radius);
    border-left: none;

    .button__icon {
      font-size: 1.25rem;
    }
  }
}
</style>
