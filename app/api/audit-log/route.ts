import { NextResponse } from 'next/server'

import { insertAuditLog } from '@/lib/actions/audit-logs/insert-audit-log'
import { computeDataDifference, createAuditLogEntry } from '@/lib/helpers/audit-log-helpers'

export async function POST(request: Request) {
    const body = await request.json()
    const { id, table, data, op, session_variables } = body
    const tableName = table.name
    const { old, new: newData } = data
    const userId = session_variables['x-hasura-user-id']

    // Compute difference between old and new data
    const difference = computeDataDifference(old, newData)

    // Create audit log entry
    const auditLogEntry = createAuditLogEntry({
        operation: op,
        tableName,
        rowId: id,
        difference,
        userId,
    })

    // Insert audit log
    try {
        await insertAuditLog({
            object: auditLogEntry,
            on_conflict: {
                constraint: 'audit_logs_pkey',
            },
        })
    } catch (error) {
        console.error('Failed to insert audit log:', error)
        // Don't fail the webhook if audit log insertion fails
    }

    return NextResponse.json({ success: true })
}
