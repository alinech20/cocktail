<script setup lang="ts">
import { ref } from 'vue'
import { useEventBus } from '@vueuse/core'
import CustomButton from '../global/inputs/CustomButton.vue'
import MainMenu from '../MainMenu.vue'
import MenuIcon from '~icons/mdi/settings'
import { BUS_EVENTS, MAGIC_NUMBERS } from '@/constants'

const aboutDialog = useEventBus(BUS_EVENTS.DIALOGS.ABOUT)

const clicksCounter = ref(0)
const resetClicksTimeout = ref()
const resetClicksAndTimeout = () => {
  clicksCounter.value = 0
  if (resetClicksTimeout.value) clearTimeout(resetClicksTimeout.value)
}

const showMenu = ref(false)
const toggleShowMenu = () => {
  if (clicksCounter.value) {
    clicksCounter.value++
    if (clicksCounter.value === MAGIC_NUMBERS.ABOUT_CLICKS) {
      aboutDialog.emit()
      resetClicksAndTimeout()
    }
  }

  if (!showMenu.value && !clicksCounter.value) {
    clicksCounter.value = 1
    resetClicksTimeout.value = setTimeout(resetClicksAndTimeout, 1500)
  }

  showMenu.value = !showMenu.value
}
</script>

<template>
  <section class="header-menu">
    <CustomButton
      class="header-menu__button btn--tight btn--primary-inverse"
      :button-content="MenuIcon"
      @click.stop.prevent="toggleShowMenu"
    />
    <!-- <MainMenu v-show="showMenu" /> -->
  </section>
</template>

<style lang="scss">
.header-menu {
  padding: var(--small-item-spacer);

  &__button {
    height: 40px;
    border-radius: var(--button-border-radius);
  }
}
</style>
