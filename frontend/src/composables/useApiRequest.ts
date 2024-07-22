import { ENDPOINTS } from '@/constants'
import { createFetch } from '@vueuse/core'

export const useApiRequest = () => {
  const apiCall = createFetch({
    baseUrl: ENDPOINTS.BASE_URL,
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

  return {
    apiCall
  }
}
