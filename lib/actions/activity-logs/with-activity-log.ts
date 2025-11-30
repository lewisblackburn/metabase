'use server'

import { insertActivityLog } from './insert-activity-log'

/**
 * Wraps an operation with automatic audit logging
 * @param operation - The async operation to execute
 * @param getEntityId - Function to extract entity ID from the operation result
 * @param getMetadata - Function to extract metadata from the operation result
 * @returns The result of the operation
 */
export async function withActivityLog<TResult>({
    operation,
    getEntityId,
    getMetadata,
}: {
    operation: () => Promise<TResult>
    getEntityId: (result: TResult) => string | undefined | null
    getMetadata?: (result: TResult) => Record<string, unknown>
}): Promise<TResult> {
    const result = await operation()

    const entityId = getEntityId(result)
    if (entityId) {
        void insertActivityLog({
            object: {
                row_id: entityId,
                changes: getMetadata?.(result),
            },
            on_conflict: {
                constraint: 'activity_logs_pkey',
                update_columns: [],
            },
        }).catch(() => { })
    }

    return result
}
