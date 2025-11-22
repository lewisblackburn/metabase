/**
 * Helper functions for audit log operations
 */

import { Audit_Logs } from '@/generated/graphql'

/**
 * Type representing the structure of an audit log difference field
 * This matches the structure returned by computeDataDifference
 */
export type AuditLogDifference = Record<string, { old: unknown; new: unknown }>

/**
 * Type for the difference field from Audit_Logs
 * The difference field is stored as JSONB, but we know its structure
 */
export type AuditLogDifferenceField = AuditLogDifference | null

/**
 * Operation type determined by the presence of old and new data
 */
type OperationType = 'INSERT' | 'UPDATE' | 'DELETE'

/**
 * Determines the operation type based on old and new data
 */
function determineOperationType(
    oldData: Record<string, unknown> | null | undefined,
    newData: Record<string, unknown> | null | undefined,
): OperationType {
    if (!oldData && newData) return 'INSERT'
    if (oldData && !newData) return 'DELETE'
    if (oldData && newData) return 'UPDATE'
    return 'UPDATE' // fallback, though this shouldn't happen
}

/**
 * Deep equality check for values
 */
function areValuesEqual(oldValue: unknown, newValue: unknown): boolean {
    // Handle null/undefined cases
    if (oldValue === newValue) return true
    if (oldValue == null || newValue == null) return false

    // Deep comparison for objects and arrays
    try {
        return JSON.stringify(oldValue) === JSON.stringify(newValue)
    } catch {
        // If JSON.stringify fails, fall back to strict equality
        return oldValue === newValue
    }
}

/**
 * Computes the difference between old and new data objects
 * Returns an object containing only the fields that have changed
 *
 * Logic:
 * - INSERT: old: null, new: object (stores all new data)
 * - UPDATE: old: object, new: object (stores only differences)
 * - DELETE: old: object, new: null (stores all old data)
 *
 * @param oldData - The old data object (can be null/undefined for INSERT operations)
 * @param newData - The new data object (can be null/undefined for DELETE operations)
 * @returns An object containing changed fields with old and new values
 */
export function computeDataDifference(
    oldData: Record<string, unknown> | null | undefined,
    newData: Record<string, unknown> | null | undefined,
): AuditLogDifference {
    const differences: Record<string, { old: unknown; new: unknown }> = {}
    const operationType = determineOperationType(oldData, newData)

    switch (operationType) {
        case 'INSERT': {
            // INSERT: old: null, new: object (store all new data)
            if (!newData) break

            for (const key in newData) {
                if (Object.prototype.hasOwnProperty.call(newData, key)) {
                    differences[key] = {
                        old: null,
                        new: newData[key],
                    }
                }
            }
            break
        }

        case 'UPDATE': {
            // UPDATE: old: object, new: object (store only differences)
            if (!oldData || !newData) break

            // Check all keys in newData for changes
            for (const key in newData) {
                if (Object.prototype.hasOwnProperty.call(newData, key)) {
                    const oldValue = oldData[key]
                    const newValue = newData[key]

                    // Only include if values are different
                    if (!areValuesEqual(oldValue, newValue)) {
                        differences[key] = {
                            // Convert undefined to null for JSONB compatibility
                            old: oldValue === undefined ? null : oldValue,
                            new: newValue === undefined ? null : newValue,
                        }
                    }
                }
            }

            // Check for keys that were removed (exist in oldData but not in newData)
            for (const key in oldData) {
                if (
                    Object.prototype.hasOwnProperty.call(oldData, key) &&
                    !Object.prototype.hasOwnProperty.call(newData, key)
                ) {
                    differences[key] = {
                        old: oldData[key],
                        new: null,
                    }
                }
            }
            break
        }

        case 'DELETE': {
            // DELETE: old: object, new: null (store all old data)
            if (!oldData) break

            for (const key in oldData) {
                if (Object.prototype.hasOwnProperty.call(oldData, key)) {
                    differences[key] = {
                        old: oldData[key],
                        new: null,
                    }
                }
            }
            break
        }
    }

    return differences
}

/**
 * Creates an audit log entry from webhook data
 * @param params - Parameters for creating the audit log
 * @returns An object ready to be inserted into the audit_logs table
 */
export function createAuditLogEntry({
    operation,
    tableName,
    rowId,
    difference,
    userId,
    meta,
}: {
    operation: Audit_Logs['action']
    tableName: Audit_Logs['table']
    rowId: Audit_Logs['row_id']
    difference: AuditLogDifference
    userId: Audit_Logs['user_id']
    meta?: Audit_Logs['meta']
}) {
    return {
        action: operation,
        table: tableName,
        row_id: rowId,
        difference: Object.keys(difference).length > 0 ? difference : null,
        user_id: userId,
        meta,
    }
}
