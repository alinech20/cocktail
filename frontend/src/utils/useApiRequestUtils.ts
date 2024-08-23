import { useLogger } from '@/composables/useLogger'
import type { IApiPath } from '@/types/api'

export const useApiRequestUtils = () => {
  const { info, debug } = useLogger()

  function replaceEndpointPlaceholders({ url, params }: IApiPath) {
    info('Replacing endpoint placeholders...')
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

  function addQueryParams({ url, query }: IApiPath) {
    info('Adding query params...')
    debug(`url: ${url}`)
    debug(`query: ${JSON.stringify(query)}`)

    let queryString = '?'

    for (const key in query) {
      debug(`Params key value: ${key}`)

      if (queryString !== '?') queryString += '&'
      queryString += `${key}=`

      // @ts-expect-error
      if (Array.isArray(query[key])) {
        info('Key has array value')
        // @ts-expect-error
        const count = query[key].length

        for (let i = 0; i < count; i++) {
          // @ts-expect-error
          const val = query[key]
          debug(`Value ${i + 1}: ${val}`)
          queryString += `${val}`

          if (i < count - 1) queryString += `&${key}=`
        }
      } else {
        info('Key has one value')
        // @ts-expect-error
        const val = query[key]
        debug(`Value: ${val}`)
        queryString += `${val}`
      }
    }

    debug(`Query string: ${queryString}`)

    return (url + queryString).replace(/\{(.*?)\}/gim, '').replace('//', '/')
  }

  return {
    replaceEndpointPlaceholders,
    addQueryParams
  }
}
