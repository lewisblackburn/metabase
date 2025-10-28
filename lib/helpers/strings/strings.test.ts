import { describe, expect, it } from 'vitest'

import { isUuid, matchRoute } from './strings'

describe('matchRoute', () => {
    it('should return true if the path matches the pattern', () => {
        expect(matchRoute('/movies/123', '/movies/:id')).toBe(true)
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
