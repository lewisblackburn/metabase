import { createClient, type NhostClient } from '@nhost/nhost-js'
import { DEFAULT_SESSION_KEY, type Session } from '@nhost/nhost-js/session'

let nhostClient: NhostClient | null = null

const key = DEFAULT_SESSION_KEY

/**
 * Gets a cookie by name from the browser
 */
function getCookie(name: string): string | null {
    const matches = document.cookie.match(
        new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)'),
    )
    return matches ? decodeURIComponent(matches[1]) : null
}

/**
 * Sets a cookie in the browser
 */
function setCookie(name: string, value: string, days = 30): void {
    const maxAge = days * 24 * 60 * 60 // Convert days to seconds
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax${
        window.location.protocol === 'https:' ? '; Secure' : ''
    }`
}

/**
 * Deletes a cookie from the browser
 */
function deleteCookie(name: string): void {
    document.cookie = `${name}=; path=/; max-age=0`
}

/**
 * Creates an Nhost client for use in client components.
 * This is a singleton to ensure we only create one instance.
 */
export function createNhostClientSingleton(): NhostClient {
    if (!nhostClient) {
        nhostClient = createClient({
            region: process.env.NEXT_PUBLIC_NHOST_REGION,
            subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN,
            graphqlUrl: process.env.NEXT_PUBLIC_NHOST_GRAPHQL_URL,
            storageUrl: process.env.NEXT_PUBLIC_NHOST_STORAGE_URL,
            authUrl: process.env.NEXT_PUBLIC_NHOST_AUTH_URL,
            storage: {
                // Use cookies to match server-side storage
                get: (): Session | null => {
                    const s = getCookie(key)
                    if (!s) {
                        return null
                    }
                    try {
                        return JSON.parse(s) as Session
                    } catch {
                        return null
                    }
                },
                set: (value: Session) => {
                    setCookie(key, JSON.stringify(value), 30)
                },
                remove: () => {
                    deleteCookie(key)
                },
            },
        })
    }

    return nhostClient
}
