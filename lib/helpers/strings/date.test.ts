import { describe, expect, it } from 'vitest'

import { formatDate } from './date'

describe('formatDate', () => {
    const testDate = new Date('2024-01-01T12:00:00Z')

    it('formats date with default locale (en)', () => {
        const result = formatDate(testDate, 'yyyy-MM-dd')
        expect(result).toBe('2024-01-01')
    })

    it('formats date with specified locale (en)', () => {
        const result = formatDate(testDate, 'PPP', 'en')
        expect(result).toBe('January 1st, 2024')
    })

    it('formats date with French locale', () => {
        const result = formatDate(testDate, 'PPP', 'fr')
        expect(result).toBe('1 janvier 2024')
    })

    it('formats date with Spanish locale', () => {
        const result = formatDate(testDate, 'PPP', 'es')
        expect(result).toBe('1 de enero de 2024')
    })

    it('formats date with German locale', () => {
        const result = formatDate(testDate, 'PPP', 'de')
        expect(result).toBe('1. Januar 2024')
    })

    it('formats date with custom format string', () => {
        const result = formatDate(testDate, 'dd/MM/yyyy')
        expect(result).toBe('01/01/2024')
    })
})
