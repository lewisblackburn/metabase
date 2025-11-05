import { createServerClient, type NhostClient } from '@nhost/nhost-js'

import { env } from '@/env'

/**
 * Creates an Nhost client configured for admin server usage
 */
export function createAdminNhostClient(): NhostClient {
    return createServerClient({
        subdomain: env.NHOST_SUBDOMAIN,
        region: env.NHOST_REGION,
        storage: {
            get: () => null,
            set: () => {},
            remove: () => {},
        },
    })
}
