import { describe, expect, it } from 'vitest'

import { formatRuntime, isUuid, matchRoute } from './strings'

describe('matchRoute', () => {
    it('should return true if the path matches the pattern', () => {
        expect(matchRoute('/movies/123', '/movies/:id')).toBe(true)
    })

    it('should return true if the path matches the array of patterns', () => {
        expect(matchRoute('/movies/123', ['/movies/:id', '/movies/:id/edit'])).toBe(true)
    })

    it('should return false if the path does not match the pattern', () => {
        expect(matchRoute('/movies/123', '/movies/:id/edit')).toBe(false)
    })
})

describe('isUuid', () => {
    it('should return true if the value is a valid UUID', () => {
        expect(isUuid('123e4567-e89b-12d3-a456-426614174000')).toBe(true)
    })
    it('should return false if the value is not a valid UUID', () => {
        expect(isUuid('123e4567-e89b-12d3-a456-4266141740001')).toBe(false)
        expect(isUuid('asdfldsf435jtl34t24gwgfa4wkrj3qlkjfqs')).toBe(false)
    })
})

describe('formatRuntime', () => {
    it('should return the runtime in hours and minutes', () => {
        expect(formatRuntime(120)).toBe('2h 00m')
    })

    it('should return the runtime in hours and minutes when the runtime is less than 10 minutes', () => {
        expect(formatRuntime(5)).toBe('0h 05m')
    })

    it('should return the runtime in hours and minutes when the runtime is 0', () => {
        expect(formatRuntime(0)).toBe('0h 00m')
    })

    it('should return an empty string if the runtime is not an integer', () => {
        expect(formatRuntime(1.5)).toBe('0h 00m')
        expect(formatRuntime(NaN)).toBe('0h 00m')
        expect(formatRuntime(Infinity)).toBe('0h 00m')
        expect(formatRuntime(-Infinity)).toBe('0h 00m')
    })
})
