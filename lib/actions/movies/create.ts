'use server'

import {
    CreateMovieDocument,
    CreateMovieMutation,
    CreateMovieMutationVariables,
} from '@/generated/graphql'
import { Action, EntityType } from '@/lib/helpers/graphql-enums'
import { createNhostClient } from '@/lib/nhost/server'
import { handleGraphQLError } from '@/lib/utils/error-handler'

import { withAudit } from '../audit-logs/with-audit'

export async function createMovie({ title }: { title: string }) {
    const nhost = await createNhostClient()

    return withAudit({
        entityType: EntityType.MOVIE,
        action: Action.INSERT,
        operation: async () => {
            return nhost.graphql
                .request<CreateMovieMutation, CreateMovieMutationVariables>(CreateMovieDocument, {
                    object: { title },
                    on_conflict: { constraint: 'movies_pkey' },
                })
                .catch(handleGraphQLError)
        },
        getEntityId: result => result?.body.data?.insert_movies_one?.id,
        getMetadata: () => ({ title }),
    })
}
