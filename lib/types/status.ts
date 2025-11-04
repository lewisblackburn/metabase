/**
 * Site system status type definitions
 *
 * Note: These are for monitoring the health of backend services (auth, graphQL, storage, functions)
 * and are separate from user movie statuses (WATCHED, WATCHING, etc.)
 */

export type SiteServiceName = 'auth' | 'graphQL' | 'storage' | 'functions'

export interface SiteSystemStatus {
    status: Record<SiteServiceName, boolean>
    updatedAt: string
}

export interface SiteStatusIndicator {
    color: string
    glow: string
    text: string
}
