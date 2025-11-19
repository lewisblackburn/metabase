import { NextResponse } from 'next/server'

import { insertAuditLog } from '@/lib/actions/audit-logs/insert-audit-log'
import { computeDataDifference, createAuditLogEntry } from '@/lib/helpers/audit-log-helpers'

export async function POST(request: Request) {
    const body = await request.json()

    if (body === undefined || body === null) return NextResponse.json({ success: false })

    // Handle nested payload structure from Hasura webhook
    const payload = body.payload || body
    const { table, event } = payload
    const { data, op, session_variables } = event || {}

    if (!table || !event) return NextResponse.json({ success: false })

    const tableName = table.name
    const { old, new: newData } = data || {}
    const rowId = newData?.id || old?.id
    const userId = session_variables?.['x-hasura-user-id']

    if (!userId) return NextResponse.json({ success: false })

    // Compute difference between old and new data
    const difference = computeDataDifference(old, newData)

    // Create audit log entry
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
    }).catch(error => {
        // Don't fail the webhook if audit log insertion fails
        console.error('Failed to insert audit log:', error)
    })

    return NextResponse.json({ success: true })
}
