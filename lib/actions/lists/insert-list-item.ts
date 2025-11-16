'use server'

import {
    InsertListItemDocument,
    InsertListItemMutation,
    InsertListItemMutationVariables,
} from '@/generated/graphql'
import { createNhostClient } from '@/lib/nhost/server'
import { handleGraphQLError } from '@/lib/utils/error-handler'

export async function insertListItem(variables: InsertListItemMutationVariables) {
    const nhost = await createNhostClient()

    const result = await nhost.graphql
        .request<
            InsertListItemMutation,
            InsertListItemMutationVariables
        >(InsertListItemDocument, variables)
        .catch(error => {
            handleGraphQLError(error)
        })

    return result
}
