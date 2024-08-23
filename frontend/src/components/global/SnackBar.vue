<script setup lang="ts">
import { useLogger } from '@/composables/useLogger'
import { BUS_EVENTS, SNACKBAR_DURATION } from '@/constants'
import type { ISnackBarMessage } from '@/types/snackbar'
import { useEventBus } from '@vueuse/core'
import { onMounted, ref } from 'vue'

const { info } = useLogger()
const snackbar = useEventBus<ISnackBarMessage>(BUS_EVENTS.SNACKBAR)

const show = ref(false)
const msg = ref('')
const style = ref('')
const duration = ref(SNACKBAR_DURATION)

onMounted(() => {
  snackbar.on((notification) => {
    info('Showing snackbar notification...')
    show.value = true
    msg.value = notification.msg
    style.value = notification.style

    if (notification.duration) duration.value = notification.duration

    setTimeout(() => {
      info('Hiding snackbar notification...')
      show.value = false
    }, duration.value)
  })
})
</script>

<template>
  <article class="notification-snackbar" v-if="show" :class="style">
    {{ msg }}
  </article>
</template>

<style lang="scss">
@import '../../styles/variables/sizes.css';
@import '../../styles/variables/spacing.css';

.notification-snackbar {
  position: absolute;
  border-radius: var(--custom-input-border-radius);
  bottom: var(--small-item-spacer);
  left: var(--small-item-spacer);
  right: var(--small-item-spacer);
  padding: var(--medium-item-spacer);
}
</style>
