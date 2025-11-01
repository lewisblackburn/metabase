type LogLevel = 'debug' | 'info' | 'warn' | 'error'

interface LoggerConfig {
    enabled: boolean
    level: LogLevel
    includeTimestamp: boolean
}

const LOG_LEVELS: Record<LogLevel, number> = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
}

class Logger {
    private config: LoggerConfig = {
        enabled: process.env.NODE_ENV === 'development',
        level: (process.env.NEXT_PUBLIC_LOG_LEVEL as LogLevel) || 'debug',
        includeTimestamp: true,
    }

    private context?: string

    constructor(context?: string) {
        this.context = context
    }

    private shouldLog(level: LogLevel): boolean {
        if (!this.config.enabled) return false
        return LOG_LEVELS[level] >= LOG_LEVELS[this.config.level]
    }

    private formatMessage(level: LogLevel, message: string, data?: unknown): unknown[] {
        const emoji = {
            debug: '🔍',
            info: 'ℹ️',
            warn: '⚠️',
            error: '❌',
        }[level]

        const timestamp = this.config.includeTimestamp
            ? `[${new Date().toISOString().split('T')[1].split('.')[0]}]`
            : ''

        const contextStr = this.context ? `[${this.context}]` : ''
        const prefix = [timestamp, emoji, contextStr].filter(Boolean).join(' ')

        return data !== undefined ? [`${prefix} ${message}`, data] : [`${prefix} ${message}`]
    }

    debug(message: string, data?: unknown) {
        if (this.shouldLog('debug')) {
            console.log(...this.formatMessage('debug', message, data))
        }
    }

    info(message: string, data?: unknown) {
        if (this.shouldLog('info')) {
            console.info(...this.formatMessage('info', message, data))
        }
    }

    warn(message: string, data?: unknown) {
        if (this.shouldLog('warn')) {
            console.warn(...this.formatMessage('warn', message, data))
        }
    }

    error(message: string, data?: unknown) {
        if (this.shouldLog('error')) {
            console.error(...this.formatMessage('error', message, data))
        }
    }

    /**
     * Create a new logger instance with a specific context
     */
    withContext(context: string): Logger {
        return new Logger(context)
    }

    /**
     * Configure the logger (useful for runtime changes)
     */
    configure(config: Partial<LoggerConfig>) {
        this.config = { ...this.config, ...config }
    }
}

// Default logger instance
export const logger = new Logger()

// Factory function for creating contextual loggers
export const createLogger = (context: string) => new Logger(context)
