import { TypedDocumentNode } from '@graphql-typed-document-node/core'
import gql from 'graphql-tag'

import { createNhostClientSingleton } from './nhost/client'
import { handleGraphQLError } from './utils/error-handler'

export function fetcher<TData, TVariables = Record<string, unknown>>(
    document: TypedDocumentNode<TData, TVariables>,
    variables?: TVariables,
) {
    return async (): Promise<TData> => {
        const nhost = createNhostClientSingleton()
        const result = await nhost.graphql
            .request(gql(document as unknown as string), variables)
            .catch(handleGraphQLError)
        if (!result?.body?.data) throw new Error('Failed to fetch data')
        return result.body.data as TData
    }
}
