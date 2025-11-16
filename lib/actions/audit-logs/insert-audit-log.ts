'use server'

import {
    InsertAuditLogDocument,
    InsertAuditLogMutation,
    InsertAuditLogMutationVariables,
} from '@/generated/graphql'
import { createNhostClient } from '@/lib/nhost/server'
import { handleGraphQLError } from '@/lib/utils/error-handler'

export async function insertAuditLog(variables: InsertAuditLogMutationVariables) {
    const nhost = await createNhostClient()

    const result = await nhost.graphql
        .request<
            InsertAuditLogMutation,
            InsertAuditLogMutationVariables
        >(InsertAuditLogDocument, variables)
        .catch(error => {
            handleGraphQLError(error)
        })

    return result
}
