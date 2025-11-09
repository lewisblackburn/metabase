'use server'

import {
    UpsertUserMovieActivityDocument,
    UpsertUserMovieActivityMutation,
    UpsertUserMovieActivityMutationVariables,
} from '@/generated/graphql'
import { UserMovieStatus } from '@/lib/enums'
import { createNhostClient } from '@/lib/nhost/server'

export async function upsertUserMovieActivity({
    id,
    rating,
    status,
    comment,
}: {
    id: string
    rating?: number
    status?: UserMovieStatus
    comment?: string
}) {
    const nhost = await createNhostClient()

    return nhost.graphql.request<
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
}
