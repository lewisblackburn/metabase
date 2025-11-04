import { NextResponse } from 'next/server'

import { HealthDocument, HealthQuery, HealthQueryVariables } from '@/generated/graphql'
import { createNhostClient } from '@/lib/nhost/server'
import type { SiteServiceName, SiteSystemStatus } from '@/lib/types/status'
import { SITE_STATUS_REVALIDATE_TIME } from '@/lib/utils/status'

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
                'Cache-Control': `public, s-maxage=${SITE_STATUS_REVALIDATE_TIME}, stale-while-revalidate`,
            },
        })
    } catch (error) {
        console.error('Site status check failed:', error)

        return NextResponse.json({ error: 'Failed to check site system status' }, { status: 500 })
    }
}
