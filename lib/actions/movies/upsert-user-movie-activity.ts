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

    const result = await withActivityLog({
        operation: async () => {
            return nhost.graphql
                .request<UpsertUserMovieActivityMutation>(UpsertUserMovieActivityDocument, {
                    object: { movie_id: id, rating, status, comment },
                    on_conflict: {
                        constraint: 'user_movie_activities_pkey',
                        update_columns: ['rating', 'status', 'comment'],
                    },
                })
                .catch(handleGraphQLError)
        },
        getEntityId: result => result?.body.data?.insert_user_movie_activities_one?.movie_id,
        getMetadata: result => {
            return {
                ...(rating ? { rating: result.body.data?.insert_user_movie_activities_one?.rating } : {}),
                ...(status ? { status: result.body.data?.insert_user_movie_activities_one?.status } : {}),
                ...(comment ? { comment: result.body.data?.insert_user_movie_activities_one?.comment } : {})
            }
        },
    })

    // Revalidate the movie page to reflect the updated activity
    revalidatePath(`/movies/${id}`)

    return result
}
