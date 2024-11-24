<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import CloseIcon from '~icons/mdi/close'
import CustomButton from './inputs/CustomButton.vue'

defineProps<{
  width?: number
}>()

defineEmits(['close'])

onMounted(() => document.body.classList.add('noscroll'))
onUnmounted(() => document.body.classList.remove('noscroll'))
</script>

<template>
  <div class="dialog-overlay">
    <article class="dialog" :style="`width: ${width || 360}px`">
      <section class="dialog__title">
        <h1>
          <slot name="title">Dialog title</slot>
        </h1>
        <CustomButton class="dialog__close" :button-content="CloseIcon" @click="$emit('close')" />
      </section>
      <section class="dialog__content">
        <slot name="content">Dialog content</slot>
      </section>
    </article>
  </div>
</template>

<style lang="scss">
.dialog-overlay {
  top: 0;
  z-index: var(--dialog-z-index);
  position: absolute;
  overflow: hidden;

  background-color: var(--overlay-dark);

  width: 100dvw;
  width: 100vw;
  height: 100dvh;
  height: 100vh;
}

.dialog {
  position: absolute;
  background-color: var(--white);
  border-radius: var(--default-radius);

  max-width: 80%;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &__title {
    padding: var(--small-item-spacer) var(--medium-item-spacer);
    border-bottom: 1px solid var(--border-light-gray);
    color: var(--primary-color);

    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      margin: 0;
    }
  }

  &__close {
    padding: 0;
    font-size: 1.25rem;
  }

  &__content {
    padding: var(--medium-item-spacer);
  }
}
</style>
