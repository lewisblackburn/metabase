import { createServerClient, type NhostClient } from '@nhost/nhost-js'

/**
 * Creates an Nhost client configured for script usage
 */
export function createScriptNhostClient(subdomain: string, region: string): NhostClient {
    return createServerClient({
        subdomain,
        region,
        storage: {
            get: () => null,
            set: () => {},
            remove: () => {},
        },
    })
}
