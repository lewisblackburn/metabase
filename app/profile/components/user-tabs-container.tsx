import { TabsContent } from '@radix-ui/react-tabs'
import { Suspense } from 'react'

import UserActivity from './tabs/user-activity'
import UserActivityLoading from './tabs/user-activity/loading'
import UserTabs from './user-tabs'

export default function UserTabsContainer() {
    return (
        <UserTabs>
            <TabsContent value="activity">
                <Suspense fallback={<UserActivityLoading />}>
                    <UserActivity />
                </Suspense>
            </TabsContent>

            <TabsContent value="collection">
                <div>Collection</div>
            </TabsContent>

            <TabsContent value="lists">
                <div>Lists</div>
            </TabsContent>

            <TabsContent value="reviews">
                <div>Reviews</div>
            </TabsContent>

            <TabsContent value="statistics">
                <div>Statistics</div>
            </TabsContent>

            <TabsContent value="achievements">
                <div>Achievements</div>
            </TabsContent>
        </UserTabs>
    )
}
