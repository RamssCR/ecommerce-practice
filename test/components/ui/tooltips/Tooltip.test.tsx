import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Tooltip from '@components/ui/tooltips/Tooltip'

// Mock the theme provider hook
vi.mock('@hooks/useThemeProvider', () => ({
    useThemeProvider: () => ({
        theme: 'light'
    })
}))

describe('Tooltip', () => {
    test('should render correctly', () => {
        render(<Tooltip>Tooltip content</Tooltip>)
        expect(screen.getByText('Tooltip content')).toBeDefined()
    })

    test('should apply custom className', () => {
        const { container } = render(
            <Tooltip className="custom-class">Tooltip content</Tooltip>
        )
        expect(container.querySelector('.custom-class')).toBeDefined()
    })

    test('should render with light variant', () => {
        const { container } = render(
            <Tooltip variant="light">Tooltip content</Tooltip>
        )
        expect(container.querySelector('.bg-primary-light')).toBeDefined()
    })

    test('should render with dark variant', () => {
        const { container } = render(
            <Tooltip variant="dark">Tooltip content</Tooltip>
        )
        expect(container.querySelector('.bg-primary-dark')).toBeDefined()
    })

    test('should render with background variant and light theme', () => {
        const { container } = render(
            <Tooltip variant="background">Tooltip content</Tooltip>
        )
        expect(container.querySelector('.border-slate-300')).toBeDefined()
    })

    test('should render children correctly', () => {
        render(
            <Tooltip>
                <span>Child element</span>
            </Tooltip>
        )
        expect(screen.getByText('Child element')).toBeDefined()
    })
})