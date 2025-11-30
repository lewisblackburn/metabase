'use server'

import { revalidatePath } from 'next/cache'

import {
    UpsertUserMovieActivityDocument,
    UpsertUserMovieActivityMutation,
    User_Movie_Activities,
} from '@/generated/graphql'
import { createNhostClient } from '@/lib/nhost/server'
import { handleGraphQLError } from '@/lib/utils/error-handler'

import { withActivityLog } from '../activity-logs/with-activity-log'

export async function upsertUserMovieActivity({
    id,
    rating,
    status,
    comment,
}: {
    id: string
    rating?: User_Movie_Activities['rating']
    status?: User_Movie_Activities['status']
    comment?: User_Movie_Activities['comment']
}) {
    const nhost = await createNhostClient()

    // Build object with only provided fields
    const activityObject: Record<string, unknown> = { movie_id: id }
    if (rating !== undefined) activityObject.rating = rating
    if (status !== undefined) activityObject.status = status
    if (comment !== undefined) activityObject.comment = comment

    // Build update_columns array with only provided fields
    const updateColumns = [
        rating !== undefined && 'rating',
        status !== undefined && 'status',
        comment !== undefined && 'comment',
    ].filter(Boolean) as string[]

    const result = await withActivityLog({
        operation: async () => {
            return nhost.graphql
                .request<UpsertUserMovieActivityMutation>(UpsertUserMovieActivityDocument, {
                    object: activityObject,
                    on_conflict: {
                        constraint: 'user_movie_activities_pkey',
                        update_columns: updateColumns,
                    },
                })
                .catch(handleGraphQLError)
        },
        getEntityId: result => result?.body.data?.insert_user_movie_activities_one?.movie_id,
        getMetadata: result => {
            const activity = result.body.data?.insert_user_movie_activities_one
            const metadata: Record<string, unknown> = {}

            if (rating !== undefined && activity?.rating) metadata.rating = activity.rating
            if (status !== undefined && activity?.status) metadata.status = activity.status
            if (comment !== undefined && activity?.comment) metadata.comment = activity.comment

            return metadata
        },
    })

    revalidatePath(`/movies/${id}`)

    return result
}
