import type { IApiCallError } from '@/types/errors'
import type { TNullable } from '@/types/helpers'
import { useLogFormatter } from '@/utils/useLogFormatter'
import log, { type Logger, type LogLevelNames } from 'loglevel'

export const useLogger = () => {
  let instance: TNullable<Logger> = null

  if (!instance) {
    instance = log.getLogger('root')
    instance.setLevel('trace')
  }

  const setLevel = (level: LogLevelNames) => {
    instance.setLevel(level, true)
  }

  const { formatApiError, formatTraceMessage, formatDebugMessage, formatInfoMessage } =
    useLogFormatter()

  const trace = (msg: string) => {
    instance.trace(formatTraceMessage(msg))
  }

  const debug = (msg: string) => {
    instance.debug(formatDebugMessage(msg))
  }

  const info = (msg: string) => {
    instance.info(formatInfoMessage(msg))
  }

  const warn = (msg: string) => {
    instance.warn(msg)
  }

  const error = (error: IApiCallError) => {
    instance.error(formatApiError(error))
  }

  return {
    setLevel,
    trace,
    debug,
    info,
    warn,
    error
  }
}
