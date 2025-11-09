'use server'

import {
    CreateMovieDocument,
    CreateMovieMutation,
    CreateMovieMutationVariables,
} from '@/generated/graphql'
import { createNhostClient } from '@/lib/nhost/server'

export async function createMovie({ title }: { title: string }) {
    const nhost = await createNhostClient()

    return nhost.graphql.request<CreateMovieMutation, CreateMovieMutationVariables>(
        CreateMovieDocument,
        {
            object: {
                title,
            },
            on_conflict: {
                constraint: 'movies_pkey',
            },
        },
    )
}
