import { logger } from '@/lib/helpers/logger'

import { formatConstraintError } from './constraint-handler'
import { GraphQLError, GraphQLErrorCode } from './types'

/**
 * Handles GraphQL errors and throws user-friendly messages
 */
export function handleGraphQLError(error: unknown): never {
    const errorObj = error as {
        body?: { errors?: Array<{ message?: string; extensions?: Record<string, unknown> }> }
        message?: string
    }

    const firstError = errorObj.body?.errors?.[0]

    if (!firstError) {
        throw new Error(errorObj.message || 'An unknown error occurred')
    }

    const code = (firstError.extensions?.code as string) || 'unknown'
    const message = firstError.message || 'An error occurred'

    switch (code) {
        case GraphQLErrorCode.NotAuthorized:
        case GraphQLErrorCode.Unauthorized:
            throw new GraphQLError(
                'You are not authorized to perform this action.',
                code,
                firstError.extensions,
            )

        case GraphQLErrorCode.ConstraintViolation:
            throw new GraphQLError(
                formatConstraintError(message, firstError.extensions),
                code,
                firstError.extensions,
            )

        case GraphQLErrorCode.ValidationFailed:
            logger.error(message)
            throw new GraphQLError('The data you provided is invalid.', code, firstError.extensions)

        default:
            throw new GraphQLError(message, code, firstError.extensions)
    }
}

// Re-export types and classes for convenience
export type { ConstraintType, ErrorPattern } from './types'
export { DatabaseConstraint, GraphQLError, GraphQLErrorCode } from './types'
