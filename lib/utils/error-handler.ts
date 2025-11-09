/**
 * GraphQL error types from Hasura/Nhost
 */
export enum GraphQLErrorCode {
    ValidationFailed = 'validation-failed',
    NotAuthorized = 'permission-denied',
    Unauthorized = 'unauthorized',
    ConstraintViolation = 'constraint-violation',
    DataException = 'data-exception',
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

/**
 * Handles GraphQL errors from Nhost/Hasura and throws appropriate errors
 *
 * @param error - The error object from GraphQL request
 * @throws {GraphQLError} - Throws a GraphQLError with appropriate message and code
 */
export function handleGraphQLError(error: unknown): never {
    const errorObj = error as {
        body?: {
            errors?: Array<{
                message?: string
                extensions?: Record<string, unknown> & { code?: string }
            }>
        }
        message?: string
    }

    const graphqlErrors = errorObj.body?.errors || []
    const firstError = graphqlErrors[0]

    if (!firstError) {
        throw new Error(errorObj.message || 'An unknown error occurred')
    }

    const errorCode = firstError.extensions?.code || 'unknown'
    const errorMessage = firstError.message || 'An error occurred'

    switch (errorCode) {
        case GraphQLErrorCode.ValidationFailed:
        case GraphQLErrorCode.NotAuthorized:
        case GraphQLErrorCode.Unauthorized:
            throw new GraphQLError(
                'You are not authorized to perform this action.',
                errorCode,
                firstError.extensions,
            )

        case GraphQLErrorCode.ConstraintViolation:
            throw new GraphQLError(
                'A constraint violation occurred. The data may already exist.',
                errorCode,
                firstError.extensions,
            )

        default:
            throw new GraphQLError(errorMessage, errorCode, firstError.extensions)
    }
}
