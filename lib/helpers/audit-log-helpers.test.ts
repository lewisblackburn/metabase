import { describe, expect, it } from 'vitest'

import { computeDataDifference, createAuditLogEntry } from './audit-log-helpers'

describe('computeDataDifference', () => {
    it('should return empty object for INSERT operations (no old data)', () => {
        const newData = { id: '123', name: 'Test', value: 100 }
        const result = computeDataDifference(null, newData)
        expect(result).toEqual({})
    })

    it('should return all fields for DELETE operations (no new data)', () => {
        const oldData = { id: '123', name: 'Test', value: 100 }
        const result = computeDataDifference(oldData, null)
        expect(result).toEqual({
            id: { old: '123', new: null },
            name: { old: 'Test', new: null },
            value: { old: 100, new: null },
        })
    })

    it('should return only changed fields for UPDATE operations', () => {
        const oldData = { id: '123', name: 'Old Name', value: 100, status: 'active' }
        const newData = { id: '123', name: 'New Name', value: 200, status: 'active' }
        const result = computeDataDifference(oldData, newData)
        expect(result).toEqual({
            name: { old: 'Old Name', new: 'New Name' },
            value: { old: 100, new: 200 },
        })
    })

    it('should handle nested objects', () => {
        const oldData = {
            id: '123',
            metadata: { key: 'old', nested: { value: 1 } },
        }
        const newData = {
            id: '123',
            metadata: { key: 'new', nested: { value: 2 } },
        }
        const result = computeDataDifference(oldData, newData)
        expect(result).toEqual({
            metadata: {
                old: { key: 'old', nested: { value: 1 } },
                new: { key: 'new', nested: { value: 2 } },
            },
        })
    })

    it('should handle arrays', () => {
        const oldData = { id: '123', tags: ['a', 'b'] }
        const newData = { id: '123', tags: ['a', 'c'] }
        const result = computeDataDifference(oldData, newData)
        expect(result).toEqual({
            tags: {
                old: ['a', 'b'],
                new: ['a', 'c'],
            },
        })
    })

    it('should detect removed fields', () => {
        const oldData = { id: '123', name: 'Test', value: 100 }
        const newData = { id: '123', name: 'Test' }
        const result = computeDataDifference(oldData, newData)
        expect(result).toEqual({
            value: { old: 100, new: undefined },
        })
    })

    it('should detect added fields', () => {
        const oldData = { id: '123', name: 'Test' }
        const newData = { id: '123', name: 'Test', value: 100 }
        const result = computeDataDifference(oldData, newData)
        expect(result).toEqual({
            value: { old: undefined, new: 100 },
        })
    })

    it('should return empty object when no changes', () => {
        const oldData = { id: '123', name: 'Test', value: 100 }
        const newData = { id: '123', name: 'Test', value: 100 }
        const result = computeDataDifference(oldData, newData)
        expect(result).toEqual({})
    })

    it('should handle undefined values', () => {
        const oldData = { id: '123', name: 'Test', value: undefined }
        const newData = { id: '123', name: 'Test', value: 100 }
        const result = computeDataDifference(oldData, newData)
        expect(result).toEqual({
            value: { old: undefined, new: 100 },
        })
    })

    it('should handle null values', () => {
        const oldData = { id: '123', name: 'Test', value: null }
        const newData = { id: '123', name: 'Test', value: 100 }
        const result = computeDataDifference(oldData, newData)
        expect(result).toEqual({
            value: { old: null, new: 100 },
        })
    })
})

describe('createAuditLogEntry', () => {
    it('should create audit log entry with all fields', () => {
        const result = createAuditLogEntry({
            operation: 'UPDATE',
            tableName: 'movies',
            rowId: '123e4567-e89b-12d3-a456-426614174000',
            difference: {
                name: { old: 'Old Name', new: 'New Name' },
            },
            userId: 'user-123',
        })

        expect(result).toEqual({
            action: 'UPDATE',
            table: 'movies',
            row_id: '123e4567-e89b-12d3-a456-426614174000',
            difference: {
                name: { old: 'Old Name', new: 'New Name' },
            },
            user_id: 'user-123',
        })
    })

    it('should handle INSERT operation', () => {
        const result = createAuditLogEntry({
            operation: 'INSERT',
            tableName: 'movies',
            rowId: '123e4567-e89b-12d3-a456-426614174000',
            difference: {},
            userId: 'user-123',
        })

        expect(result).toEqual({
            action: 'INSERT',
            table: 'movies',
            row_id: '123e4567-e89b-12d3-a456-426614174000',
            difference: null,
            user_id: 'user-123',
        })
    })

    it('should handle DELETE operation', () => {
        const result = createAuditLogEntry({
            operation: 'DELETE',
            tableName: 'movies',
            rowId: '123e4567-e89b-12d3-a456-426614174000',
            difference: {
                name: { old: 'Test', new: null },
            },
            userId: 'user-123',
        })

        expect(result).toEqual({
            action: 'DELETE',
            table: 'movies',
            row_id: '123e4567-e89b-12d3-a456-426614174000',
            difference: {
                name: { old: 'Test', new: null },
            },
            user_id: 'user-123',
        })
    })

    it('should handle missing userId', () => {
        const result = createAuditLogEntry({
            operation: 'UPDATE',
            tableName: 'movies',
            rowId: '123e4567-e89b-12d3-a456-426614174000',
            difference: { name: { old: 'Old', new: 'New' } },
            userId: null,
        })

        expect(result.user_id).toBeUndefined()
    })

    it('should handle missing rowId', () => {
        const result = createAuditLogEntry({
            operation: 'UPDATE',
            tableName: 'movies',
            rowId: null,
            difference: { name: { old: 'Old', new: 'New' } },
            userId: 'user-123',
        })

        expect(result.row_id).toBeUndefined()
    })

    it('should convert operation to uppercase', () => {
        const result = createAuditLogEntry({
            operation: 'update',
            tableName: 'movies',
            rowId: '123',
            difference: {},
            userId: 'user-123',
        })

        expect(result.action).toBe('UPDATE')
    })
})
