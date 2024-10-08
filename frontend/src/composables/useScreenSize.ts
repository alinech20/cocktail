import { useWindowSize } from '@vueuse/core'
import { computed } from 'vue'

export const useScreenSize = () => {
  const { width } = useWindowSize()
  const hasDesktopScreen = computed(() => width.value > 1280)

  return {
    hasDesktopScreen
  }
}
