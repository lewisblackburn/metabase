import { List_Items_Constraint } from '@/generated/graphql'

import { ConstraintType, ErrorPattern } from './types'

/**
 * Determines constraint type and returns user-friendly message
 */
export function getConstraintMessage(constraintName: string): string {
    // Check for specific known constraints
    switch (constraintName) {
        case 'list_items_list_id_media_id_key' satisfies List_Items_Constraint:
        case 'list_items_pkey' satisfies List_Items_Constraint:
            return 'This item is already in the selected list.'

        // Add more specific constraint cases here
    }

    // Fallback to pattern matching for unknown constraints
    if (
        constraintName.endsWith(ConstraintType.PrimaryKey) ||
        constraintName.includes(ConstraintType.UniqueKey)
    ) {
        return 'This record already exists.'
    }

    if (constraintName.includes(ConstraintType.ForeignKey) || constraintName.includes('foreign')) {
        return 'The referenced data does not exist.'
    }

    if (constraintName.includes(ConstraintType.Check)) {
        return 'The data does not meet the required criteria.'
    }

    return 'A constraint violation occurred.'
}

/**
 * Extracts and formats constraint violation message
 */
export function formatConstraintError(
    errorMessage: string,
    extensions?: Record<string, unknown>,
): string {
    // Try to get constraint name from extensions or error message
    const constraintName =
        (extensions?.constraint as string) || errorMessage.match(/constraint "([^"]+)"/)?.[1]

    if (constraintName) {
        return getConstraintMessage(constraintName)
    }

    // Fallback to message pattern matching
    const lowerMessage = errorMessage.toLowerCase()

    if (
        lowerMessage.includes(ErrorPattern.Uniqueness) ||
        lowerMessage.includes(ErrorPattern.Duplicate)
    ) {
        return 'This record already exists.'
    }

    if (lowerMessage.includes(ErrorPattern.ForeignKey)) {
        return 'The referenced data does not exist.'
    }

    return errorMessage !== 'GraphQL error' ? errorMessage : 'A constraint violation occurred.'
}
