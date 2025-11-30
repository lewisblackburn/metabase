import { TabsContent } from '@radix-ui/react-tabs'

import UserTabs from './user-tabs'

export default function UserTabsContainer() {
    return (
        <UserTabs>
            <TabsContent value="activity">
                <div>Activity</div>
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
