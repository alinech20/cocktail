import { API } from '@/constants'
import type { IApiPath } from '@/types/api'
import { useApiRequestUtils } from '@/utils/useApiRequestUtils'
import { createFetch } from '@vueuse/core'
import { useLogger } from './useLogger'

export const useApiRequest = (path: IApiPath | string) => {
  const { debug, error } = useLogger()
  const { replaceEndpointPlaceholders, addQueryParams } = useApiRequestUtils()

  let endpoint: string
  const baseUrl = import.meta.env.API_BASE_URL ?? API.BASE_URL

  try {
    endpoint =
      typeof path === 'string'
        ? path
        : addQueryParams({
          url: replaceEndpointPlaceholders(path),
          query: path.query
        })

    debug(`Final endpoint value: ${endpoint}`)
  } catch (e) {
    error(e as string)
    return
  }

  const apiCall = createFetch({
    baseUrl,
    options: {
      async onFetchError(ctx) {
        ctx.error = {
          code: ctx.response?.status,
          title: ctx.response?.statusText,
          message: ctx.data.detail,
          url: ctx.response?.url
        }

        return ctx
      }
    }
  })

  return apiCall(endpoint)
}
