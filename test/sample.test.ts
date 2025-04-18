import { describe, test, expect } from 'vitest'

describe('Sample Tests Suite', () => {
    test('should handle array operations correctly', () => {
        const numbers = [1, 2, 3, 4, 5]

        expect(numbers).toHaveLength(5)
        expect(numbers.map(n => n * 2)).toEqual([2, 4, 6, 8, 10])
        expect(numbers.filter(n => n % 2 === 0)).toEqual([2, 4])
        expect(numbers.reduce((acc, curr) => acc + curr, 0)).toBe(15)
    })

    test('should handle async operations', async () => {
        const asyncFunction = async () => {
            return new Promise(resolve => setTimeout(() => resolve('done'), 100))
        }
        const result = await asyncFunction()

        expect(result).toBe('done')
    })

    test('should handle object mutations correctly', () => {
        const user = { name: 'John', age: 30 }
        const updatedUser = { ...user, age: 31 }

        expect(updatedUser).toEqual({ name: 'John', age: 31 })
        expect(user).not.toBe(updatedUser)
        expect(Object.keys(user)).toHaveLength(2)
    })

    test('should handle string manipulations', () => {
        const str = 'Hello World'
        
        expect(str.toLowerCase()).toBe('hello world')
        expect(str.split(' ')).toEqual(['Hello', 'World'])
        expect(str.includes('Hello')).toBeTruthy()
        expect(str.startsWith('Hell')).toBe(true)
    })
})