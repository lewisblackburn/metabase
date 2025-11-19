import { TabsContent } from '@radix-ui/react-tabs'
import { Suspense } from 'react'

import MovieTabs from './movie-tabs'
import MovieAuditLogsTab from './tabs/audit-logs'
import MovieAuditLogsLoading from './tabs/audit-logs/loading'

export default function MovieTabsContainer({ movieId }: { movieId: string }) {
    return (
        <MovieTabs>
            <TabsContent value="reviews">not implemented</TabsContent>

            <TabsContent value="where-to-watch">not implemented</TabsContent>

            <TabsContent value="credits">not implemented</TabsContent>

            <TabsContent value="recommendations">not implemented</TabsContent>

            <TabsContent value="images">not implemented</TabsContent>

            <TabsContent value="videos">not implemented</TabsContent>

            <TabsContent value="audit-logs">
                <Suspense fallback={<MovieAuditLogsLoading />}>
                    <MovieAuditLogsTab movieId={movieId} />
                </Suspense>
            </TabsContent>
        </MovieTabs>
    )
}
