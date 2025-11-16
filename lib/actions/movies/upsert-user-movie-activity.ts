'use server'

import { revalidatePath } from 'next/cache'

import {
    UpsertUserMovieActivityDocument,
    UpsertUserMovieActivityMutation,
} from '@/generated/graphql'
import { Action, EntityType } from '@/lib/helpers/graphql-enums'
import { createNhostClient } from '@/lib/nhost/server'
import { UserMovieActivity } from '@/lib/types/movies'
import { handleGraphQLError } from '@/lib/utils/error-handler'

import { withAudit } from '../audit-logs/with-audit'

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

    const result = await withAudit({
        entityType: EntityType.ACTIVITY,
        action: Action.INSERT,
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
        // TODO: What to do when entity has composite key e.g. user_id and movie_id?
        // TODO: Do we need to store before and after values for audit logs?
        // TODO: This is storing things that haven't changed
        getEntityId: result => result.body.data?.insert_user_movie_activities_one?.movie_id,
        getMetadata: () => ({ rating, status, comment }),
    })

    // Revalidate the movie page to reflect the updated activity
    revalidatePath(`/movies/${id}`)

    return result
}
