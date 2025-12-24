import { NhostClient } from '@nhost/nhost-js'

import {
    External_Ids_Constraint,
    FindEntityByExternalIdDocument,
    FindEntityByExternalIdQuery,
    FindEntityByExternalIdQueryVariables,
    InsertExternalIdDocument,
    InsertExternalIdMutation,
    InsertExternalIdMutationVariables,
} from '@/generated/graphql'
import { createNhostClient } from '@/lib/nhost/server'
import { Source } from '@/lib/types/importer'
import { handleGraphQLError } from '@/lib/utils/error-handler'

import { BaseImporter } from './base.importer'

export abstract class TMDBImporter extends BaseImporter {
    source = Source.TMDB

    constructor(
        nhost: NhostClient,
        protected apiKey: string,
    ) {
        super(nhost)
    }

    protected async fetchFromTMDB(endpoint: string): Promise<unknown> {
        const separator = endpoint.includes('?') ? '&' : '?'
        const url = `https://api.themoviedb.org/3/${endpoint}${separator}api_key=${this.apiKey}`
        const res = await fetch(url)
        if (!res.ok) throw new Error(`TMDB fetch failed: ${res.status}`)
        return res.json()
    }

    protected async findByExternalId(externalId: string): Promise<string | null> {
        const nhost = await createNhostClient()
        const result = await nhost.graphql
            .request<FindEntityByExternalIdQuery, FindEntityByExternalIdQueryVariables>(
                FindEntityByExternalIdDocument,
                {
                    source: this.source,
                    externalId,
                    entityType: this.entityType,
                },
            )
            .catch(handleGraphQLError)

        return result?.body.data?.external_ids?.[0]?.entity_id || null
    }

    protected async linkExternalId(
        entityId: string,
        externalId: string,
        rawData: unknown,
    ): Promise<void> {
        const nhost = await createNhostClient()
        await nhost.graphql
            .request<InsertExternalIdMutation, InsertExternalIdMutationVariables>(
                InsertExternalIdDocument,
                {
                    object: {
                        entity_id: entityId,
                        entity_type: this.entityType,
                        source: this.source,
                        external_id: externalId,
                        data: rawData,
                    },
                    on_conflict: {
                        constraint: 'external_ids_unique' satisfies External_Ids_Constraint,
                        update_columns: [],
                    },
                },
            )
            .catch(handleGraphQLError)
    }
}
