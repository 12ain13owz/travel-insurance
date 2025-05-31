import { Request } from 'express'

import { loggerConst } from '@/constants/logger.const'
import { ErrorContext, ErrorSeverity, LogLevel } from '@/types/error.type'

import { logger } from './logger.util'

export class AppError extends Error {
  constructor(
    message: string,
    public status: number,
    public severity: ErrorSeverity,
    public context: ErrorContext
  ) {
    super(message)
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
  }

  addRequestContext(req: Request) {
    this.context.requestContext = {
      method: req.method,
      url: req.originalUrl,
      baseUrl: req.baseUrl,
      path: req.path,
      body: req.body as Record<string, unknown>,
      params: req.params,
      query: req.query,
    }

    return this
  }
}

export class ErrorLogger {
  private static formatErrorLog(
    error: AppError | Error,
    additionalData?: Record<string, unknown>
  ) {
    const baseLog = {
      timestamp: new Date().toISOString(),
      name: error.name,
      message: error.message,
      stack: error.stack,
    }

    if (error instanceof AppError)
      return {
        ...baseLog,
        status: error.status,
        severity: error.severity,
        ...error.context,
        ...additionalData,
      }

    return {
      ...baseLog,
      status: 500,
      severity: 'HIGH',
      ...additionalData,
    }
  }

  static log(
    error: AppError | Error,
    additionalContext?: Partial<ErrorContext>
  ) {
    const errorLog = this.formatErrorLog(error, additionalContext)
    const level: LogLevel =
      error instanceof AppError && error.severity
        ? (loggerConst.logSeverity[error.severity] as LogLevel) || 'ERROR'
        : 'ERROR'

    switch (level) {
      case 'INFO':
        logger.info([errorLog])
        break
      case 'WARN':
        logger.warn([errorLog])
        break
      case 'ERROR':
        logger.error([errorLog])
        break
      case 'CRIT':
        logger.crit([errorLog])
        break
      default:
        logger.error([errorLog])
    }

    return errorLog
  }
}

export class ErrorFactory {
  static notFound(
    message: string, // Not Found
    functionName: string,
    additionalData?: Record<string, unknown>
  ) {
    return new AppError(message, 404, 'LOW', {
      functionName,
      additionalData,
    })
  }

  static badRequest(
    message: string, // Bad Request
    functionName: string,
    additionalData?: Record<string, unknown>
  ) {
    return new AppError(message, 400, 'MEDIUM', {
      functionName,
      additionalData,
    })
  }

  static unauthorized(
    message: string, // Unauthorized
    functionName: string,
    additionalData?: Record<string, unknown>
  ) {
    return new AppError(message, 401, 'HIGH', {
      functionName,
      additionalData,
    })
  }

  static serverError(
    message: string, //Internal Server Error
    functionName: string,
    additionalData?: Record<string, unknown>
  ) {
    return new AppError(message, 500, 'CRITICAL', {
      functionName,
      additionalData,
    })
  }
}
