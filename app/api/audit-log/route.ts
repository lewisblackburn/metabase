import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const { body } = await request.json()

    // const auditLog = await createAuditLog({ entityType, action, entityId, metadata })

    return NextResponse.json({ body })
}
