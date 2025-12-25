/**
 * Importer types and enums
 */

export enum Action {
    CREATED = 'created',
    LINKED = 'linked',
    MERGED = 'merged',
}

export type ImportResult<TEntityId = string> = {
    entityId: TEntityId
    action: Action
}

export type NormalisedData<TEntity = unknown> = {
    entity: Partial<TEntity>
    externalId: string
}
