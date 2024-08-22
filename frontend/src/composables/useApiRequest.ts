import { API } from '@/constants'
import type { IApiPath } from '@/types/api'
import { useApiRequestUtils } from '@/utils/useApiRequestUtils'
import { createFetch } from '@vueuse/core'
import { useLogger } from './useLogger'

export const useApiRequest = (path: IApiPath | string) => {
  const { debug } = useLogger()
  const { replaceEndpointPlaceholders, addQueryParams } = useApiRequestUtils()

  const endpoint =
    typeof path === 'string'
      ? path
      : addQueryParams({
          url: replaceEndpointPlaceholders(path),
          query: path.query
        })
  debug(`Final endpoint value: ${endpoint}`)

  const apiCall = createFetch({
    baseUrl: API.BASE_URL,
    options: {
      async onFetchError(ctx) {
        ctx.error = {
          code: ctx.response?.status,
          title: ctx.response?.statusText,
          message: ctx.data,
          url: ctx.response?.url
        }

        return ctx
      }
    }
  })

  return apiCall(endpoint)
}
