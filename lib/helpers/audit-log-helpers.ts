/**
 * Helper functions for audit log operations
 */

/**
 * Computes the difference between old and new data objects
 * Returns an object containing only the fields that have changed
 * @param oldData - The old data object (can be null/undefined for INSERT operations)
 * @param newData - The new data object (can be null/undefined for DELETE operations)
 * @returns An object containing only changed fields with old and new values
 */
export function computeDataDifference(
    oldData: Record<string, unknown> | null | undefined,
    newData: Record<string, unknown> | null | undefined,
): Record<string, { old: unknown; new: unknown }> {
    const differences: Record<string, { old: unknown; new: unknown }> = {}

    // Handle INSERT case (no old data)
    if (!oldData && newData) {
        // For INSERT, we might want to log all new fields or just mark as created
        // For now, return empty differences for INSERT operations
        return differences
    }

    // Handle DELETE case (no new data)
    if (oldData && !newData) {
        // For DELETE, log all old fields
        for (const key in oldData) {
            if (Object.prototype.hasOwnProperty.call(oldData, key)) {
                differences[key] = {
                    old: oldData[key],
                    new: null,
                }
            }
        }
        return differences
    }

    // Handle UPDATE case (both old and new data exist)
    if (oldData && newData) {
        // Check all keys in newData
        for (const key in newData) {
            if (Object.prototype.hasOwnProperty.call(newData, key)) {
                const oldValue = oldData[key]
                const newValue = newData[key]

                // Deep comparison for objects and arrays
                if (JSON.stringify(oldValue) !== JSON.stringify(newValue)) {
                    differences[key] = {
                        old: oldValue,
                        new: newValue,
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
                    new: undefined,
                }
            }
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
}: {
    operation: string
    tableName: string
    rowId: string | null | undefined
    difference: Record<string, { old: unknown; new: unknown }>
    userId: string | null | undefined
}) {
    // Map operation to action name
    const action = operation.toUpperCase()

    // Get the row ID from either old or new data
    const finalRowId = rowId || undefined

    return {
        action,
        table: tableName,
        row_id: finalRowId,
        difference: Object.keys(difference).length > 0 ? difference : null,
        user_id: userId || undefined,
    }
}
