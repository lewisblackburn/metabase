'use server'

import { revalidatePath } from 'next/cache'

import {
    InsertUserMovieWatchesDocument,
    InsertUserMovieWatchesMutation,
    InsertUserMovieWatchesMutationVariables,
} from '@/generated/graphql'
import { createNhostClient } from '@/lib/nhost/server'
import { handleGraphQLError } from '@/lib/utils/error-handler'

export async function insertUserMovieWatches({ id }: { id: string }) {
    const nhost = await createNhostClient()

    const result = await nhost.graphql
        .request<InsertUserMovieWatchesMutation, InsertUserMovieWatchesMutationVariables>(
            InsertUserMovieWatchesDocument,
            {
                object: {
                    movie_id: id,
                },
                on_conflict: {
                    constraint: 'user_movie_watches_pkey',
                    update_columns: [],
                },
            },
        )
        .catch(error => {
            handleGraphQLError(error)
        })

    // Revalidate the movie page to reflect the updated watches
    revalidatePath(`/movies/${id}`)

    return result
}
