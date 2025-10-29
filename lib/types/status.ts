/**
 * System status types and utilities
 */

export type ServiceName = 'auth' | 'graphQL' | 'storage' | 'functions'

export interface SystemStatus {
    status: Record<ServiceName, boolean>
    updatedAt: string
}

export interface StatusIndicator {
    color: string
    glow: string
    text: string
}

/**
 * Determines the status indicator based on service health
 */
export function getStatusIndicator(services: boolean[]): StatusIndicator {
    const allUp = services.every(Boolean)
    const noneUp = services.every(v => !v)

    if (allUp) {
        return {
            color: 'bg-green-500',
            glow: 'bg-green-400/50',
            text: 'All systems operational',
        }
    }

    if (noneUp) {
        return {
            color: 'bg-red-500',
            glow: 'bg-red-400/50',
            text: 'All systems down',
        }
    }

    return {
        color: 'bg-yellow-500',
        glow: 'bg-yellow-400/50',
        text: 'Some systems experiencing issues',
    }
}

/**
 * Revalidation time in seconds (5 minutes)
 */
export const STATUS_REVALIDATE_TIME = 300
