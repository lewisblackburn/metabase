'use server'

import { revalidatePath } from 'next/cache'

import {
    UpsertUserMovieActivityDocument,
    UpsertUserMovieActivityMutation,
    UpsertUserMovieActivityMutationVariables,
} from '@/generated/graphql'
import { createNhostClient } from '@/lib/nhost/server'
import { UserMovieActivity } from '@/lib/types/movies'

export async function upsertUserMovieActivity({
    id,
    rating,
    status,
    comment,
}: {
    id: string
    rating?: UserMovieActivity['rating']
    status?: UserMovieActivity['status']
    comment?: UserMovieActivity['comment']
}) {
    const nhost = await createNhostClient()

    const result = await nhost.graphql.request<
        UpsertUserMovieActivityMutation,
        UpsertUserMovieActivityMutationVariables
    >(UpsertUserMovieActivityDocument, {
        object: {
            movie_id: id,
            rating,
            status,
            comment,
        },
        on_conflict: {
            constraint: 'user_movie_activities_pkey',
            update_columns: ['rating', 'status', 'comment'],
        },
    })

    // Revalidate the movie page to reflect the updated activity
    revalidatePath(`/movies/${id}`)

    return result
}
