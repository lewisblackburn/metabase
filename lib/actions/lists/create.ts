'use server'

import {
    CreateListDocument,
    CreateListMutation,
    CreateListMutationVariables,
} from '@/generated/graphql'
import { createNhostClient } from '@/lib/nhost/server'
import { handleGraphQLError } from '@/lib/utils/error-handler'

export async function createList(variables: CreateListMutationVariables) {
    const nhost = await createNhostClient()

    const result = await nhost.graphql
        .request<CreateListMutation, CreateListMutationVariables>(CreateListDocument, variables)
        .catch(error => {
            handleGraphQLError(error)
        })

    return result
}
