import { useLogger } from '@/composables/useLogger'
import type { IApiPath } from '@/types/api'

export const useApiRequestUtils = () => {
  function replaceEndpointPlaceholders({ url, params }: IApiPath) {
    const { debug } = useLogger()

    debug('Replacing endpoint placeholders')
    debug(`url: ${url}`)
    debug(`params: ${JSON.stringify(params)}`)

    for (const key in params) {
      debug(`Params key value: ${key}`)
      const placeholder = `{${key}}`
      debug(`Placeholder: ${placeholder}`)

      // @ts-expect-error
      if (url.includes(placeholder)) url = url.replace(placeholder, params[key])
    }

    return url.replace(/\{(.*?)\}/gim, '').replace('//', '/')
  }

  return {
    replaceEndpointPlaceholders
  }
}
