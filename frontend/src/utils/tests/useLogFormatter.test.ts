import { describe, it, expect } from 'vitest'
import { useLogFormatter } from '../useLogFormatter'

describe('testing log formatter', () => {
  const formatter = useLogFormatter()

  describe('testing formatTraceMessage', () => {
    const { formatTraceMessage } = formatter

    it('should return "error" message', () => {
      expect(formatTraceMessage('')).toBe('formatTraceMessage got empty message')
    })

    it('should return formatted message', () => {
      const formattedError = formatTraceMessage('some weird error occured')
      expect(formattedError.slice(24)).toBe('TRACE: some weird error occured')
    })
  })

  describe('testing formatDebugMessage', () => {
    const { formatDebugMessage } = formatter

    it('should return "error" message', () => {
      expect(formatDebugMessage('')).toBe('formatDebugMessage got empty message')
    })

    it('should return formatted message', () => {
      const formattedError = formatDebugMessage('some weird error occured')
      expect(formattedError).toBe('DEBUG: some weird error occured')
    })
  })

  describe('testing formatInfoMessage', () => {
    const { formatInfoMessage } = formatter

    it('should return "error" message', () => {
      expect(formatInfoMessage('')).toBe('formatInfoMessage got empty message')
    })

    it('should return formatted message', () => {
      const formattedError = formatInfoMessage('some weird error occured')
      expect(formattedError).toBe('INFO: some weird error occured')
    })
  })

  describe('testing formatError', () => {
    const { formatError } = formatter

    it('should return "error" message', () => {
      expect(formatError('')).toBe('formatError got empty error')
    })

    it('should return formatted message', () => {
      const formattedError = formatError('invalid stuff happening')

      // trim datetime
      expect(formattedError.slice(24)).toBe('Error occured: invalid stuff happening')
    })
  })

  describe('testing formatApiError', () => {
    const { formatApiError } = formatter

    it('should return formatted message', () => {
      const formattedError = formatApiError({
        code: 404,
        title: 'Not Found',
        message: 'something',
        url: 'test.com'
      })

      // trim datetime
      expect(formattedError.slice(24)).toBe('404 Not Found Error occured at test.com')
    })
  })
})
