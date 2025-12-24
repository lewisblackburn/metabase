import { NhostClient } from '@nhost/nhost-js'

import { Action, EntityType, ImportResult, NormalisedData, Source } from '@/lib/types/importer'

export abstract class BaseImporter<TEntity = unknown> {
    constructor(protected nhost: NhostClient) {}

    abstract source: Source
    abstract entityType: EntityType
    abstract fetch(externalId: string): Promise<unknown>
    abstract normalise(raw: unknown): NormalisedData<TEntity>

    async import(externalId: string): Promise<ImportResult> {
        // 1. Check if already imported
        const existing = await this.findByExternalId(externalId)
        if (existing) {
            return { entityId: existing, action: Action.LINKED }
        }

        // 2. Fetch and normalise
        const raw = await this.fetch(externalId)
        const normalised = this.normalise(raw)

        // 3. Create entity
        const entityId = await this.createEntity(normalised.entity)

        // 4. Link external ID
        await this.linkExternalId(entityId, normalised.externalId, normalised.rawData)

        return { entityId, action: Action.CREATED }
    }

    protected abstract findByExternalId(externalId: string): Promise<string | null>
    protected abstract createEntity(data: Partial<TEntity>): Promise<string>
    protected abstract linkExternalId(
        entityId: string,
        externalId: string,
        rawData: unknown,
    ): Promise<void>
}
