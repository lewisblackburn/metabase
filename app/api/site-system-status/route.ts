import { NextResponse } from 'next/server'

import { HealthDocument, HealthQuery, HealthQueryVariables } from '@/generated/graphql'
import { logger } from '@/lib/helpers/logger'
import { createNhostClient } from '@/lib/nhost/server'
import type { SiteServiceName, SiteSystemStatus } from '@/lib/types/site-system-status'
import { CACHE_TIMES } from '@/lib/utils/cache'

/**
 * GET /api/site-status
 * Returns the health status of all site backend services
 */
export async function GET() {
    try {
        const nhost = await createNhostClient()

        const status: Record<SiteServiceName, boolean> = {
            auth: false,
            graphQL: false,
            storage: false,
            functions: false,
        }

        // Check each service health in parallel
        const [authVersion, graphqlHealth, storageVersion, functionsHealth] = await Promise.all([
            nhost.auth.getVersion().catch(() => ({ status: 500 })),
            nhost.graphql
                .request<HealthQuery, HealthQueryVariables>(HealthDocument)
                .catch(() => ({ body: { data: null } })),
            nhost.storage.getVersion().catch(() => ({ status: 500 })),
            fetch(nhost.functions.baseURL + '/healthz').catch(() => ({ ok: false })),
        ])

        status.auth = authVersion.status === 200
        status.graphQL = graphqlHealth.body.data?.__typename !== undefined
        status.storage = storageVersion.status === 200
        status.functions = functionsHealth.ok

        const response: SiteSystemStatus = {
            status,
            updatedAt: new Date().toISOString(),
        }

        return NextResponse.json(response, {
            headers: {
                'Cache-Control': `public, s-maxage=${CACHE_TIMES.SITE_STATUS}, stale-while-revalidate`,
            },
        })
    } catch (error) {
        logger.error('Site status check failed:', error)

        return NextResponse.json({ error: 'Failed to check site system status' }, { status: 500 })
    }
}
