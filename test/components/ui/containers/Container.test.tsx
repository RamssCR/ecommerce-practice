import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Container from '@components/ui/containers/Container'

describe('Container', () => {
    test('renders children', () => {
        render(<Container>Test</Container>)

        expect(screen.getByText('Test')).toBeDefined()
    })

    test('applies custom className', () => {
        render(<Container className="custom-class">Test</Container>)

        const container = screen.getByText('Test')
        expect(container.className).toContain('custom-class')
    })

    test('applies default classes', () => {
        render(<Container>Test</Container>)
        
        const container = screen.getByText('Test')
        expect(container.className).toContain('w-full')
    })  
})