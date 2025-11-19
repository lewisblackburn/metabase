import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const { body } = await request.json()
    // const { id, table, event, data, op, session_variables } = body
    // const tableName = table.name
    // const { old, new: newData } = data
    // const userId = session_variables['x-hasura-user-id']

    console.log({ body })

    // const auditLog = await createAuditLog({ entityType, action, entityId, metadata })

    return NextResponse.json({ body })
}
