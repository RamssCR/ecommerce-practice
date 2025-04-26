import { describe, expect, test } from 'vitest'
import { currentYear } from '@utils/currentYear'

describe('currentYear', () => {
    test('returns the current year', () => {
        const year = currentYear()
        expect(year).toBe(new Date().getFullYear())
    })
})