'use server'

import { Actions_Enum, Entity_Types_Enum } from '@/generated/graphql'

import { insertAuditLog } from './insert-audit-log'

/**
 * Wraps an operation with automatic audit logging
 * @param entityType - The type of entity being operated on
 * @param action - The action being performed
 * @param operation - The async operation to execute
 * @param getEntityId - Function to extract entity ID from the operation result
 * @param getMetadata - Optional function to extract metadata from the operation result
 * @returns The result of the operation
 */
export async function withAudit<TResult>({
    entityType,
    action,
    operation,
    getEntityId,
    getMetadata,
}: {
    entityType: Entity_Types_Enum
    action: Actions_Enum
    operation: () => Promise<TResult>
    getEntityId: (result: TResult) => string | undefined | null
    getMetadata?: (result: TResult) => Record<string, unknown>
}): Promise<TResult> {
    const result = await operation()

    const entityId = getEntityId(result)
    if (entityId) {
        void insertAuditLog({
            object: {
                entity_type: entityType,
                entity_id: entityId,
                action: action,
                metadata: getMetadata?.(result),
            },
            on_conflict: {
                constraint: 'audit_logs_pkey',
                update_columns: [],
            },
        }).catch(() => {})
    }

    return result
}
