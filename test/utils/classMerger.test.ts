import { describe, expect, test } from 'vitest'
import { classMerger } from '@utils/classMerger'

describe('classMerger', () => {
    test('merges classes correctly', () => {
        const result = classMerger('bg-amber-100 text-blue-600', 'bg-teal-500')
        expect(result).toBe('text-blue-600 bg-teal-500')
    })
    
    test('handles empty input', () => {
        const result = classMerger()
        expect(result).toBe('')
    })
    
    test('handles falsy values', () => {
        const assertion = 1 !== 1
        const result = classMerger('bg-amber-100', assertion && 'hidden')
        expect(result).toBe('bg-amber-100')
    })
})