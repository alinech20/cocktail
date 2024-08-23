import type { IApiCallError } from '@/types/errors'

export const useLogFormatter = () => {
  const getCurrentTimestamp = () => new Date().toISOString().replace('T', ' ').replace('Z', '')

  const formatApiError = (error: IApiCallError) => {
    return `${getCurrentTimestamp()} ${error.code} ${error.title} Error occured at ${error.url}`
  }

  const formatTraceMessage = (msg: string) => {
    if (!msg.length) return 'formatTraceMessage got empty message'
    return `${getCurrentTimestamp()} TRACE: ${msg}`
  }

  const formatDebugMessage = (msg: string) => {
    if (!msg.length) return 'formatDebugMessage got empty message'
    return `DEBUG: ${msg}`
  }

  const formatInfoMessage = (msg: string) => {
    if (!msg.length) return 'formatInfoMessage got empty message'
    return `INFO: ${msg}`
  }

  return {
    formatApiError,
    formatTraceMessage,
    formatDebugMessage,
    formatInfoMessage
  }
}
