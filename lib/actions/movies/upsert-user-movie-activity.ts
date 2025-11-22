'use server'

import { revalidatePath } from 'next/cache'

import {
    UpsertUserMovieActivityDocument,
    UpsertUserMovieActivityMutation,
    User_Movie_Activities,
} from '@/generated/graphql'
import { createNhostClient } from '@/lib/nhost/server'
import { handleGraphQLError } from '@/lib/utils/error-handler'

export async function upsertUserMovieActivity({
    id,
    rating,
    status,
    comment,
    meta,
}: {
    id: string
    rating?: User_Movie_Activities['rating']
    status?: User_Movie_Activities['status']
    comment?: User_Movie_Activities['comment']
    meta?: User_Movie_Activities['meta']
}) {
    const nhost = await createNhostClient()

    const result = await nhost.graphql
        .request<UpsertUserMovieActivityMutation>(UpsertUserMovieActivityDocument, {
            object: { movie_id: id, rating, status, comment, meta },
            on_conflict: {
                constraint: 'user_movie_activities_pkey',
                update_columns: ['rating', 'status', 'comment'],
            },
        })
        .catch(handleGraphQLError)

    // Revalidate the movie page to reflect the updated activity
    revalidatePath(`/movies/${id}`)

    return result
}
