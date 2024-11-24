<script setup lang="ts">
import { ref } from 'vue'
import { useEventBus } from '@vueuse/core'
import { BUS_EVENTS } from '@/constants'
import DialogBox from './global/DialogBox.vue'

const show = ref(false)
const dialog = useEventBus(BUS_EVENTS.DIALOGS.ABOUT)
dialog.on(() => (show.value = true))
</script>

<template>
  <DialogBox v-if="show" @close="show = false" :width="480">
    <template #title>About this app</template>
    <template #content>
      <article class="about__content">
        <ul>
          <li>Version 1.0.3</li>
          <li>Developed by The Witty Penguin</li>
        </ul>
      </article>
    </template>
  </DialogBox>
</template>

<style lang="scss">
.dialog__content {
  text-align: center;

  ul {
    list-style-type: none;
    padding: 0;
  }
}
</style>
