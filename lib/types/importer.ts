/**
 * Importer types and enums
 */

export enum Source {
    TMDB = 'tmdb',
}

export enum EntityType {
    MOVIE = 'movie',
    PERSON = 'person',
}

export enum Action {
    CREATED = 'created',
    LINKED = 'linked',
}

export type ImportResult<TEntityId = string> = {
    entityId: TEntityId
    action: Action
}

export type NormalisedData<TEntity = unknown> = {
    entity: Partial<TEntity>
    externalId: string
    rawData: unknown
}
