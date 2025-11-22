import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { AuditLogsDocument, AuditLogsQuery, AuditLogsQueryVariables } from '@/generated/graphql'
import type { AuditLogDifference } from '@/lib/helpers/audit-log-helpers'
import { createNhostClient } from '@/lib/nhost/server'

enum ActivityField {
    RATING = 'rating',
    COMMENT = 'comment',
    STATUS = 'status',
}

export default async function UserActivity() {
    const nhost = await createNhostClient()
    const session = nhost.getUserSession()
    const userId = session?.user?.id

    // TODO: Enable pagination for user activities
    const userActivity = await nhost.graphql.request<AuditLogsQuery, AuditLogsQueryVariables>(
        AuditLogsDocument,
        {
            where: {
                _and: [
                    {
                        user_id: { _eq: userId },
                    },
                    {
                        table: {
                            _eq: 'user_movie_activities',
                        },
                    },
                ],
            },
            order_by: {
                created_at: 'desc',
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
    if (!auditLog.user || !auditLog.difference) return null
    const differenceRecord = auditLog.difference as AuditLogDifference

    return (
        <>
            {Object.entries(differenceRecord)
                .filter(([key]) => Object.values(ActivityField).includes(key as ActivityField))
                .map(([key, change]) => (
                    <ActivityFieldItem
                        key={key}
                        field={key as ActivityField}
                        change={change}
                        user={auditLog.user!}
                    />
                ))}
        </>
    )
}

const ActivityFieldItem = ({
    field,
    change,
    user,
}: {
    field: ActivityField
    change: { old: unknown; new: unknown }
    user: NonNullable<AuditLogsQuery['audit_logs'][number]['user']>
}) => {
    const formatValue = (value: unknown) => (value !== null ? String(value) : 'N/A')
    const label = field.charAt(0).toUpperCase() + field.slice(1)

    switch (field) {
        case ActivityField.RATING:
            return <ActivityRatingItem change={change} user={user} />
        case ActivityField.COMMENT:
            return null
        case ActivityField.STATUS:
            return null
        default:
            return null
    }
}

const ActivityUser = ({
    user,
}: {
    user: NonNullable<AuditLogsQuery['audit_logs'][number]['user']>
}) => {
    return (
        <div className="flex items-center gap-2">
            <Avatar className="size-5">
                <AvatarImage src={user.avatarUrl} />
                <AvatarFallback>{user.displayName.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>{user.displayName}</span>
        </div>
    )
}

const ActivityRatingItem = ({
    change,
    user,
}: {
    change: AuditLogDifference[string]
    user: NonNullable<AuditLogsQuery['audit_logs'][number]['user']>
}) => {
    return (
        <div className="flex items-center gap-2">
            <ActivityUser user={user} />
            <div className="flex items-center gap-1">
                <span>Rated</span>
                {/* <span>{JSON.stringify(meta.title)}</span> */}
                <span>{JSON.stringify(change.new)}</span>
                {/* TODO: Create a stars component to render stars from number */}
                <span>stars</span>
            </div>
        </div>
    )
}
