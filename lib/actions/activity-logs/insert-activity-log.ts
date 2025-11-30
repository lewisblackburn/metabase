'use server'

import {
    InsertActivityLogDocument,
    InsertActivityLogMutation,
    InsertActivityLogMutationVariables,
} from '@/generated/graphql'
import { createNhostClient } from '@/lib/nhost/server'
import { handleGraphQLError } from '@/lib/utils/error-handler'

export async function insertActivityLog(variables: InsertActivityLogMutationVariables) {
    const nhost = await createNhostClient()

    const result = await nhost.graphql
        .request<
            InsertActivityLogMutation,
            InsertActivityLogMutationVariables
        >(InsertActivityLogDocument, variables)
        .catch(handleGraphQLError)

    return result
}
