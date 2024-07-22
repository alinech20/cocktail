import type { IApiCallError } from '@/types/errors'

export const useLogFormatter = () => {
  const getCurrentTimestamp = () => new Date().toISOString().replace('T', ' ').replace('Z', '')

  const formatApiError = (error: IApiCallError) => {
    return `${getCurrentTimestamp()} ${error.code} ${error.title} Error occured at ${error.url}`
  }

  const formatTraceMessage = (msg: string) => {
    return `${getCurrentTimestamp()} TRACE: ${msg}`
  }

  const formatDebugMessage = (msg: string) => {
    return `DEBUG: ${msg}`
  }

  const formatInfoMessage = (msg: string) => {
    return `INFO: ${msg}`
  }

  return {
    formatApiError,
    formatTraceMessage,
    formatDebugMessage,
    formatInfoMessage
  }
}
