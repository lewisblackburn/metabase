'use server'

import { revalidatePath } from 'next/cache'

import {
    UpsertUserMovieActivityDocument,
    UpsertUserMovieActivityMutation,
    UpsertUserMovieActivityMutationVariables,
} from '@/generated/graphql'
import { UserMovieStatus } from '@/lib/enums'
import { createNhostClient } from '@/lib/nhost/server'
import { UserMovieActivity } from '@/lib/types/movies'
import { handleGraphQLError } from '@/lib/utils/error-handler'

import { insertUserMovieWatches } from './insert-user-movie-watches'

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

    const result = await nhost.graphql
        .request<UpsertUserMovieActivityMutation, UpsertUserMovieActivityMutationVariables>(
            UpsertUserMovieActivityDocument,
            {
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
            },
        )
        .catch(error => {
            handleGraphQLError(error)
        })

    // Revalidate the movie page to reflect the updated activity
    revalidatePath(`/movies/${id}`)

    return result
}
