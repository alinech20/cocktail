<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

defineProps<{
  width?: number
}>()

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

    h1 {
      margin: 0;
    }
  }

  &__content {
    padding: var(--medium-item-spacer);
  }
}
</style>
