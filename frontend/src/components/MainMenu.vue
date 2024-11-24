<script setup lang="ts">
import { BUS_EVENTS } from '@/constants'
import { useEventBus } from '@vueuse/core'

const aboutDialog = useEventBus(BUS_EVENTS.DIALOGS.ABOUT)

const showAboutDialog = () => aboutDialog.emit()
</script>

<template>
  <section class="main-menu">
    <ul class="main-menu__items">
      <li class="main-menu__item" @click="showAboutDialog">About</li>
    </ul>
  </section>
</template>

<style lang="scss">
.main-menu {
  position: absolute;
  width: 100%;
  max-width: 600px;

  top: var(--posts-header-height);
  left: 0;

  background-color: var(--white);
  color: var(--primary-color);

  &__items {
    padding: 0;
    text-align: center;
  }

  &__item {
    text-transform: uppercase;
    list-style-type: none;
    letter-spacing: 0.125rem;

    padding: var(--small-item-spacer);

    cursor: pointer;
  }
}
</style>
