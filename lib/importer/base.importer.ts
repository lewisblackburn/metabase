import { NhostClient } from '@nhost/nhost-js'

import {
    FindEntityByExternalIdDocument,
    FindEntityByExternalIdQuery,
    FindEntityByExternalIdQueryVariables,
    InsertExternalIdDocument,
    InsertExternalIdMutation,
    InsertExternalIdMutationVariables,
    Media_Types_Enum,
    Sources_Enum,
} from '@/generated/graphql'
import { Action, ImportResult, NormalisedData } from '@/lib/types/importer'

import { handleGraphQLError } from '../utils/error-handler'

export abstract class BaseImporter<TEntity = unknown> {
    constructor(protected nhost: NhostClient) {}

    abstract source: Sources_Enum
    abstract mediaType: Media_Types_Enum
    abstract fetch(externalId: string): Promise<unknown>
    abstract normalise(raw: unknown): NormalisedData<TEntity>
    abstract findSimilar(raw: unknown): Promise<unknown[]>
    abstract merge(raw: unknown, existing: unknown): Promise<unknown>

    async import(externalId: string): Promise<ImportResult> {
        // 1. Check if already imported
        const existing = await this.findByExternalId(externalId)
        if (existing) {
            return { entityId: existing, action: Action.LINKED }
        }

        // 2. Fetch and normalise
        const raw = await this.fetch(externalId)
        const normalised = this.normalise(raw)

        // TODO: implement fuzzy search and merge
        // 3. Find similar entities
        const similar = await this.findSimilar(normalised.entity)

        if (similar.length > 0) {
            // 3.1 If similar entities found, merge them
            // if score is above threshold, merge
            // const merged = await this.merge(normalised.entity, similar[0])
            // return { entityId: merged.id, action: Action.MERGED }
        }

        // 4. Create entity
        const entityId = await this.createEntity(normalised.entity)

        // 5. Link external ID
        await this.linkExternalId(entityId, externalId)

        return { entityId, action: Action.CREATED }
    }

    protected abstract createEntity(data: Partial<TEntity>): Promise<string>

    protected async findByExternalId(externalId: string): Promise<string | null> {
        const result = await this.nhost.graphql
            .request<FindEntityByExternalIdQuery, FindEntityByExternalIdQueryVariables>(
                FindEntityByExternalIdDocument,
                {
                    externalId,
                    mediaType: this.mediaType,
                    source: this.source,
                },
            )
            .catch(handleGraphQLError)

        return result?.body.data?.external_ids?.[0]?.entity_id || null
    }

    protected async linkExternalId(entityId: string, externalId: string): Promise<void> {
        await this.nhost.graphql
            .request<InsertExternalIdMutation, InsertExternalIdMutationVariables>(
                InsertExternalIdDocument,
                {
                    object: {
                        external_id: externalId,
                        entity_id: entityId,
                        media_type: this.mediaType,
                        source: this.source,
                    },
                    on_conflict: {
                        constraint: 'external_ids_unique',
                        update_columns: [],
                    },
                },
            )
            .catch(handleGraphQLError)
    }
}
