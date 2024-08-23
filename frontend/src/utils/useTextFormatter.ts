import { useLogger } from '@/composables/useLogger'

export const useTextFormatter = () => {
  const { info, debug } = useLogger()

  const capitalizeFirstLetter = (text: string = '') => {
    info('Capitalizing first letter...')
    debug(`Received value is ${text}`)

    if (text.length === 0) return ''
    if (text.length === 1) return text.toUpperCase()
    return text[0].toUpperCase() + text.slice(1)
  }

  return {
    capitalizeFirstLetter
  }
}
