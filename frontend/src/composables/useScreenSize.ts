import { useWindowSize } from '@vueuse/core'
import { computed } from 'vue'

export const useScreenSize = () => {
  const { width } = useWindowSize()
  const hasPhoneScreen = computed(() => width.value <= 768)
  const hasTabletScreen = computed(() => width.value > 768)
  const hasLaptopScreen = computed(() => width.value > 1024)
  const hasLargeScreen = computed(() => width.value > 1280)

  return {
    width,
    hasPhoneScreen,
    hasTabletScreen,
    hasLaptopScreen,
    hasLargeScreen
  }
}
