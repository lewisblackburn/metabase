import AuditLogDifference from '@/components/audit-log-difference'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { AuditLogsDocument, AuditLogsQuery, AuditLogsQueryVariables } from '@/generated/graphql'
import type { AuditLogDifference as AuditLogDifferenceType } from '@/lib/helpers/audit-log-helpers'
import { formatDate } from '@/lib/helpers/strings/date'
import { createNhostClient } from '@/lib/nhost/server'

export default async function MovieAuditLogsTab({ movieId }: { movieId: string }) {
    const nhost = await createNhostClient()

    // TODO: Enable pagination for audit logs
    const auditLogs = await nhost.graphql.request<AuditLogsQuery, AuditLogsQueryVariables>(
        AuditLogsDocument,
        {
            where: {
                // TODO: Add indexes to the tables for faster queries
                _and: [{ table: { _eq: 'movies' } }, { row_id: { _eq: movieId } }],
            },
            order_by: {
                created_at: 'desc',
            },
        },
    )

    if (!auditLogs.body.data?.audit_logs.length) {
        // TODO: Create not found component for tabs
        return <div className="text-muted-foreground">No audit logs found</div>
    }

    return (
        <div>
            {auditLogs.body.data?.audit_logs.map(auditLog => (
                <div key={auditLog.id} className="rounded-md border">
                    <div className="flex items-center justify-between bg-secondary p-2 rounded-t-md border-b border-border/40">
                        <div className="flex flex-row items-center gap-2 ">
                            <Avatar className="size-4">
                                <AvatarImage src={auditLog.user?.avatarUrl} />
                                <AvatarFallback>
                                    {auditLog.user?.displayName?.charAt(0)}
                                </AvatarFallback>
                            </Avatar>
                            <h2 className="text-xs font-medium">{auditLog.action}</h2>
                        </div>
                        <time className="text-xs text-muted-foreground">
                            {formatDate(auditLog.created_at, 'PPP')}
                        </time>
                    </div>
                    {auditLog.difference && (
                        <AuditLogDifference
                            difference={auditLog.difference as AuditLogDifferenceType}
                        />
                    )}
                </div>
            ))}
        </div>
    )
}
