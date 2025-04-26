import { beforeEach, describe, expect, test } from 'vitest'
import { ThemeContext } from '@context/ThemeContext'
import { render, renderHook, act } from '@testing-library/react'
import { useContext, type ReactNode } from 'react'
import ThemeProvider from '@providers/ThemeProvider'
import colorPallete from '@data/colorPallete.json'

describe('ThemeProvider', () => {
    beforeEach(() => {
        localStorage.clear()
        document.body.style.cssText = ''
    })

    test('should provide default light theme when no theme in localStorage', () => {
        const wrapper = ({ children }: { children: ReactNode }) => (
            <ThemeProvider>{children}</ThemeProvider>
        )
        
        const { result } = renderHook(() => useContext(ThemeContext), { wrapper })
        
        expect(result.current?.theme).toBe('light')
    })

    test('should restore theme from localStorage', () => {
        localStorage.setItem('theme', 'dark')
        
        const wrapper = ({ children }: { children: ReactNode }) => (
            <ThemeProvider>{children}</ThemeProvider>
        )
        
        const { result } = renderHook(() => useContext(ThemeContext), { wrapper })
        
        expect(result.current?.theme).toBe('dark')
    })

    test('should toggle theme when calling toggleTheme', () => {
        const wrapper = ({ children }: { children: ReactNode }) => (
            <ThemeProvider>{children}</ThemeProvider>
        )
        
        const { result } = renderHook(() => useContext(ThemeContext), { wrapper })
        
        act(() => {
            result.current?.toggleTheme()
        })
        
        expect(result.current?.theme).toBe('dark')
        expect(localStorage.getItem('theme')).toBe('dark')
    })

    test('should set CSS variables for neutral colors', () => {
        const { neutral } = colorPallete
        render(<ThemeProvider><div /></ThemeProvider>)
        
        for (const color in neutral.light) {
            expect(document.body.style.getPropertyValue(`--color-${color}`))
                .toBe(neutral.light[color as keyof typeof neutral.light])
        }
    })

    test('should set CSS variables for primary colors', () => {
        const { primary } = colorPallete
        render(<ThemeProvider><div /></ThemeProvider>)
        
        for (const color in primary) {
            expect(document.body.style.getPropertyValue(`--color-${color}`))
                .toBe(primary[color as keyof typeof primary])
        }
    })
})
