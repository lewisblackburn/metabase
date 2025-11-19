import { NextResponse } from 'next/server'

import { insertAuditLog } from '@/lib/actions/audit-logs/insert-audit-log'
import { computeDataDifference, createAuditLogEntry } from '@/lib/helpers/audit-log-helpers'
import { handleGraphQLError } from '@/lib/utils/error-handler'

export async function POST(request: Request) {
    const body = await request.json()

    if (body === undefined || body === null) return NextResponse.json({ success: false })

    const payload = body.payload || body
    const { table, event } = payload
    const { data, op, session_variables } = event || {}

    if (!table || !event) return NextResponse.json({ success: false })

    const tableName = table.name
    const { old, new: newData } = data || {}
    const rowId = newData?.id || old?.id
    const userId = session_variables?.['x-hasura-user-id']

    if (!userId) return NextResponse.json({ success: false })

    const difference = computeDataDifference(old, newData)

    const auditLogEntry = createAuditLogEntry({
        operation: op,
        tableName,
        rowId,
        difference,
        userId,
    })

    await insertAuditLog({
        object: auditLogEntry,
        on_conflict: {
            constraint: 'audit_logs_pkey',
            update_columns: [],
        },
    }).catch(handleGraphQLError)

    return NextResponse.json({ success: true })
}
