'use server'

import { createNhostClient } from '@nhost/nhost-js'

import {
    InsertActivityLogDocument,
    InsertActivityLogMutation,
    InsertActivityLogMutationVariables,
} from '@/generated/graphql'
import { handleGraphQLError } from '@/lib/utils/error-handler'

export async function insertActivityLog(variables: InsertActivityLogMutationVariables) {
    const nhost = createNhostClient()

    console.log("INSERTING", variables)

    const result = await nhost.graphql
        .request<
            InsertActivityLogMutation,
            InsertActivityLogMutationVariables
        >(InsertActivityLogDocument, variables)
        .catch(error => {
            handleGraphQLError(error)
        })

    return result
}
