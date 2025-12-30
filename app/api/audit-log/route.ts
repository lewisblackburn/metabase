import gql from 'graphql-tag'
import { NextResponse } from 'next/server'

import {
    Activity_Logs_Constraint,
    InsertActivityLogDocument,
    InsertActivityLogMutation,
    InsertActivityLogMutationVariables,
} from '@/generated/graphql'
import { computeDataDifference, createAuditLogEntry } from '@/lib/helpers/audit-log-helpers'
import { createAdminNhostClient } from '@/lib/nhost/admin-server'
import { handleGraphQLError } from '@/lib/utils/error-handler'

export async function POST(request: Request) {
    const body = await request.json()
    if (body === undefined || body === null) return NextResponse.json({ success: false })
    const payload = body.payload || body
    const { table, event } = payload
    const { data, op, session_variables } = event || {}
    if (!table || !event) return NextResponse.json({ success: false })
    const nhost = createAdminNhostClient()
    const tableName = table.name
    const { old, new: newData } = data || {}
    const rowId = newData?.id || old?.id
    const meta = newData?.meta || old?.meta || {}
    const userId = session_variables?.['x-hasura-user-id']
    if (!userId) return NextResponse.json({ success: false })
    const difference = computeDataDifference(old, newData)
    const auditLogEntry = createAuditLogEntry({
        operation: op,
        tableName,
        rowId,
        difference,
        userId,
        meta,
    })

    await nhost.graphql
        .request<InsertActivityLogMutation, InsertActivityLogMutationVariables>(
            gql(InsertActivityLogDocument),
            {
                object: auditLogEntry,
                on_conflict: {
                    constraint: Activity_Logs_Constraint.ActivityLogsPkey,
                    update_columns: [],
                },
            },
        )
        .catch(handleGraphQLError)

    return NextResponse.json({ success: true })
}
