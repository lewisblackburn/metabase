import { TabsContent } from '@radix-ui/react-tabs'
import { Suspense } from 'react'

import MovieAuditLogsTab from './audit-logs'
import MovieAuditLogsLoading from './audit-logs/loading'
import MovieTabs from './movie-tabs'

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
