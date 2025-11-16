'use server'

import { cache } from 'react'

import { MovieDocument, MovieQuery, MovieQueryVariables } from '@/generated/graphql'
import { createNhostClient } from '@/lib/nhost/server'
import { handleGraphQLError } from '@/lib/utils/error-handler'

export const getMovie = cache(async ({ id }: { id: string }) => {
    const nhost = await createNhostClient()

    const result = await nhost.graphql
        .request<MovieQuery, MovieQueryVariables>(MovieDocument, { id })
        .catch(error => {
            handleGraphQLError(error)
        })

    return result?.body.data?.movies_by_pk ?? null
})
