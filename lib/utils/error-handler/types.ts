/**
 * GraphQL error codes from Hasura/Nhost
 */
export enum GraphQLErrorCode {
    ValidationFailed = 'validation-failed',
    NotAuthorized = 'permission-denied',
    Unauthorized = 'unauthorized',
    ConstraintViolation = 'constraint-violation',
    DataException = 'data-exception',
}

/**
 * Constraint type patterns for pattern matching
 */
export enum ConstraintType {
    PrimaryKey = '_pkey',
    UniqueKey = '_key',
    ForeignKey = '_fkey',
    Check = '_check',
}

/**
 * Error message patterns for fallback matching
 */
export enum ErrorPattern {
    Uniqueness = 'uniqueness',
    Duplicate = 'duplicate',
    ForeignKey = 'foreign key',
}

/**
 * Custom error class for GraphQL errors
 */
export class GraphQLError extends Error {
    code: string
    extensions?: Record<string, unknown>

    constructor(message: string, code: string, extensions?: Record<string, unknown>) {
        super(message)
        this.name = 'GraphQLError'
        this.code = code
        this.extensions = extensions
    }
}
