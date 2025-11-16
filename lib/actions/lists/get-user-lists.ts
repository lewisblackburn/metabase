'use server'

import { cache } from 'react'

import { ListsDocument, ListsQuery, ListsQueryVariables } from '@/generated/graphql'
import { createNhostClient } from '@/lib/nhost/server'
import { handleGraphQLError } from '@/lib/utils/error-handler'

export const getUserLists = cache(async (variables?: ListsQueryVariables) => {
    const nhost = await createNhostClient()
    const session = nhost.getUserSession()
    const userId = session?.user?.id

    const result = await nhost.graphql
        .request<ListsQuery, ListsQueryVariables>(ListsDocument, {
            ...variables,
            where: {
                ...variables?.where,
                user_id: {
                    _eq: userId,
                },
            },
        })
        .catch(error => {
            handleGraphQLError(error)
        })

    return result?.body.data?.lists ?? []
})
