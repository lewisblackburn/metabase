import { createServerClient, type NhostClient, withAdminSession } from '@nhost/nhost-js'

import { env } from '@/env'

/**
 * Creates an Nhost client configured for admin server usage
 * This client uses the admin secret to bypass Row Level Security (RLS)
 * and perform operations with elevated privileges.
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
        configure: [
            withAdminSession({
                adminSecret: env.NHOST_ADMIN_SECRET,
            }),
        ],
    })
}
