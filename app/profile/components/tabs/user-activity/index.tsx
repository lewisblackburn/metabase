import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { AuditLogsDocument, AuditLogsQuery, AuditLogsQueryVariables } from '@/generated/graphql'
import { Action, EntityType } from '@/lib/helpers/graphql-enums'
import { createNhostClient } from '@/lib/nhost/server'

export default async function UserActivity() {
    const nhost = await createNhostClient()
    const session = nhost.getUserSession()
    const userId = session?.user?.id

    const userActivity = await nhost.graphql.request<AuditLogsQuery, AuditLogsQueryVariables>(
        AuditLogsDocument,
        {
            where: {
                user_id: {
                    _eq: userId,
                },
            },
        },
    )

    return (
        <div className="flex flex-col gap-2">
            {userActivity.body.data?.audit_logs.map(auditLog => (
                <ActivityItem key={auditLog.id} auditLog={auditLog} />
            ))}
        </div>
    )
}

const ActivityItem = ({ auditLog }: { auditLog: AuditLogsQuery['audit_logs'][number] }) => {
    return (
        <div className="flex items-center gap-2">
            <Avatar className="size-5">
                <AvatarImage src={auditLog.user.avatarUrl} />
                <AvatarFallback>{auditLog.user.displayName.charAt(0)}</AvatarFallback>
            </Avatar>
            <ActivityType auditLog={auditLog} />
        </div>
    )
}

const ActivityType = ({ auditLog }: { auditLog: AuditLogsQuery['audit_logs'][number] }) => {
    switch (auditLog.entity_type) {
        case EntityType.ACTIVITY:
            return <ActivityUserActivity auditLog={auditLog} />
        default:
            return null
    }
}

const ActivityUserActivity = ({ auditLog }: { auditLog: AuditLogsQuery['audit_logs'][number] }) => {
    // TODO: What if we update status?
    // TODO: What if we update comment?
    // TODO: What if we update rating?

    const rating = auditLog.metadata.rating
    const status = auditLog.metadata.status
    const comment = auditLog.metadata.comment

    switch (auditLog.action) {
        case Action.INSERT:
            return <span>Rated {auditLog.metadata.rating} stars</span>
        case Action.DELETE:
            return <span>Removed rating on movie</span>
        default:
            return null
    }
}
