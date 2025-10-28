import { describe, expect, it } from 'vitest'

import { matchRoute } from './strings'

describe('matchRoute', () => {
  it('should return true if the path matches the pattern', () => {
    expect(matchRoute('/movies/123', '/movies/:id')).toBe(true)
  })
})
