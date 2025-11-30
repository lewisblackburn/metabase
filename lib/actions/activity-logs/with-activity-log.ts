'use server'
import { insertActivityLog } from './insert-activity-log'

/**
 * Wraps an operation with automatic audit logging
 * @param operation - The async operation to execute
 * @param getEntityId - Function to extract entity ID from the operation result
 * @param getChanges - Function to extract changes from the operation result
 * @param getMetadata - Function to extract metadata from the operation result
 * @returns The result of the operation
 */
export async function withActivityLog<TResult>({
    operation,
    getEntityId,
    getChanges,
    getMetadata,
}: {
    operation: () => Promise<TResult>
    getEntityId: (result: TResult) => string | undefined | null
    getChanges?: (result: TResult) => Record<string, unknown>
    getMetadata?: (result: TResult) => Record<string, unknown>
}): Promise<TResult> {
    const result = await operation()
    const entityId = getEntityId(result)
    const changes = getChanges?.(result)

    // Skip logging if metadata exists and all values are null (deletion scenario)
    const isDeletion = changes && Object.values(changes).every(value => value === null)

    if (entityId && !isDeletion) {
        void insertActivityLog({
            object: {
                meta: getMetadata?.(result),
                changes,
            },
            on_conflict: {
                constraint: 'activity_logs_pkey',
                update_columns: [],
            },
        })
    }

    return result
}
