import Link from 'next/link'

import Stars from '@/components/stars'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ActivityLogsQuery } from '@/generated/graphql'

export default async function ActivityItem({
    activityLog,
}: {
    activityLog: ActivityLogsQuery['activity_logs'][number]
}) {
    const {
        changes: { rating, comment, status },
        user,
        meta,
    } = activityLog
    const name = meta?.title ?? meta?.id

    switch (true) {
        case Boolean(rating):
            return (
                <div className="flex items-center gap-1">
                    <ActivityUser user={user} />
                    <div className="flex items-center gap-1">
                        <span className="text-muted-foreground">rated</span>{' '}
                        <Link href={meta.slug ?? ''} className="font-semibold">
                            {name}
                        </Link>
                        <Stars stars={rating} />
                    </div>
                </div>
            )
        case Boolean(comment):
            return (
                <div className="flex items-center gap-1">
                    <ActivityUser user={user} />
                    <div className="flex items-center gap-1">
                        <span className="text-muted-foreground">commented</span> on{' '}
                        <Link href={meta.slug ?? ''} className="font-semibold">
                            {name}
                        </Link>
                    </div>
                </div>
            )
        case Boolean(status):
            return (
                <div className="flex items-center gap-1">
                    <ActivityUser user={user} />
                    <div className="flex items-center gap-1">
                        <span className="text-muted-foreground">marked</span>{' '}
                        <Link href={meta.slug ?? ''} className="font-semibold">
                            {name}
                        </Link>
                        <span className="font-semibold">{status}</span>
                    </div>
                </div>
            )
        default:
            return null
    }
}

function ActivityUser({ user }: { user: ActivityLogsQuery['activity_logs'][number]['user'] }) {
    return (
        <div className="flex items-center gap-2">
            <Avatar className="size-5">
                <AvatarImage src={user.avatarUrl} />
                <AvatarFallback>{user.displayName.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="font-semibold">{user.displayName}</span>
        </div>
    )
}
