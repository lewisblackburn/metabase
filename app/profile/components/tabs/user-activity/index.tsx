import {
    ActivityLogsDocument,
    ActivityLogsQuery,
    ActivityLogsQueryVariables,
} from '@/generated/graphql'
import { createNhostClient } from '@/lib/nhost/server'

import ActivityItem from './activity-item'

export default async function UserActivity() {
    const nhost = await createNhostClient()
    const session = nhost.getUserSession()
    const userId = session?.user?.id

    // TODO: Enable pagination for user activities
    const userActivity = await nhost.graphql.request<ActivityLogsQuery, ActivityLogsQueryVariables>(
        ActivityLogsDocument,
        {
            where: {
                _and: [
                    {
                        user_id: { _eq: userId },
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
            {userActivity.body.data?.activity_logs.map(activityLog => (
                <ActivityItem key={activityLog.id} activityLog={activityLog} />
            ))}
        </div>
    )
}
