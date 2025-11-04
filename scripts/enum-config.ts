import type { TypedDocumentNode } from '@graphql-typed-document-node/core'

import { GendersDocument, UserMovieStatusesDocument } from '@/generated/graphql'

/**
 * Configuration for generating enum types from database tables
 *
 * This is a generic configuration interface that allows you to define
 * how to extract enum values from any GraphQL query result.
 */
export interface EnumConfig<TData = Record<string, unknown>> {
    /** Name of the enum type to generate (e.g., 'UserMovieStatus') */
    typeName: string

    /** Description of what this enum represents (used in generated documentation) */
    description: string

    /** GraphQL document to query the enum values */
    document: TypedDocumentNode<TData, Record<string, never>>

    /**
     * Path to extract the array of values from the GraphQL response data
     * Example: 'user_movie_statuses' for query { user_movie_statuses { name } }
     */
    dataPath: string

    /**
     * Field name containing the enum value in each array item
     * Example: 'name' if your query returns [{ name: 'WATCHED' }, { name: 'WATCHING' }]
     */
    valueField: string

    /**
     * Optional: Transform function to modify enum values before generating
     * Examples:
     * - (value) => value.toUpperCase()
     * - (value) => value.toLowerCase()
     * - (value) => value.replace(/_/g, '-')
     */
    transform?: (value: string) => string

    /**
     * Optional: Category for grouping related enums in documentation
     * Example: 'User', 'Movie', 'System'
     */
    category?: string
}

/**
 * Registry of all enum configurations
 *
 * To add a new enum type:
 * 1. Create a GraphQL query in graphql/queries/
 * 2. Run codegen to generate the TypeScript types
 * 3. Import the document here
 * 4. Add a new config object to this array
 * 5. Run 'npm run generate:enums' to generate the types
 */
export const enumConfigs: EnumConfig[] = [
    {
        typeName: 'UserMovieStatus',
        description:
            'Status values for tracking user movie watch progress (WATCHED, WATCHING, WATCHLIST, DROPPED)',
        document: UserMovieStatusesDocument,
        dataPath: 'user_movie_statuses',
        valueField: 'name',
        category: 'User',
    },
    {
        typeName: 'Gender',
        description: 'Available gender options for people',
        document: GendersDocument,
        dataPath: 'genders',
        valueField: 'gender',
        category: 'Person',
    },
]
