import { describe, expect, it } from 'vitest'
import { useApiRequestUtils } from '../useApiRequestUtils'
import type { IApiPath } from '@/types/api'

describe('testing api request utils', () => {
  const apiRequestUtils = useApiRequestUtils()

  describe('testing replaceEndpointPlaceholders', () => {
    const { replaceEndpointPlaceholders } = apiRequestUtils

    it('should throw error when params has no keys', () => {
      const payload: IApiPath = {
        url: 'recipes/',
        params: {}
      }

      expect(() => replaceEndpointPlaceholders(payload)).toThrow(
        'params is empty object at replaceEndpointPlaceholders'
      )
    })

    it('should throw error when params has wrong key', () => {
      const payload: IApiPath = {
        url: 'recipes/{somePlaceholder}',
        params: {
          recipeId: 10
        }
      }

      expect(() => replaceEndpointPlaceholders(payload)).toThrow(
        'Invalid param at replaceEndpointPlaceholders'
      )
    })

    it('should do nothing when params is undefined', () => {
      const result = replaceEndpointPlaceholders({
        url: 'recipes/'
      })

      expect(result).toBe('recipes/')
    })

    it('should replace recipeId with param', () => {
      const result = replaceEndpointPlaceholders({
        url: 'recipes/{recipeId}',
        params: {
          recipeId: 7
        }
      })

      expect(result).toBe('recipes/7')
    })
  })

  describe('testing addQueryParams', () => {
    const { addQueryParams } = apiRequestUtils

    it('should throw error when query has no keys', () => {
      const payload: IApiPath = {
        url: 'recipes/',
        query: {}
      }

      expect(() => addQueryParams(payload)).toThrow('query is empty object at addQueryParams')
    })

    it('should do nothing when query is undefined', () => {
      const result = addQueryParams({
        url: 'recipes/'
      })

      expect(result).toBe('recipes/')
    })

    it('should add one query param', () => {
      const result = addQueryParams({
        url: 'recipes/filter/',
        query: {
          name: 'red'
        }
      })

      expect(result).toBe('recipes/filter/?name=red')
    })

    it('should add multiple query params', () => {
      const result = addQueryParams({
        url: 'recipes/filter/',
        query: {
          name: 'red',
          page: 10,
          size: 7
        }
      })

      expect(result).toBe('recipes/filter/?name=red&page=10&size=7')
    })

    // to add array query params test at some point
    // it('should add array query param', () => {
    //   const result = addQueryParams({
    //     url: 'recipes/filter/',
    //     query: {
    //       name: ['red', 'blue', 'purple']
    //     }
    //   })

    //   expect(result).toBe('recipes/filter/?name=red,green,purple')
    // })
  })
})
