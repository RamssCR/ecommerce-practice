import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import Button from '@components/ui/buttons/Button'

describe('Button', () => {
    test('renders with default props', () => {
        render(<Button>Click me</Button>)
        const button = screen.getByText('Click me')
        expect(button).toBeDefined()
    })

    test('renders with custom className and variant', () => {
        render(
            <Button
                className="mt-5"
                variant="color-primary-light"
            >
                Open cart
            </Button>
        )

        const button = screen.getByText('Open cart')

        expect(button).toBeDefined()
        expect(button.getAttribute('class')).toContain('mt-5')
        expect(button.getAttribute('class')).toContain('bg-primary-light')
    })

    test('triggers onClick event after clicking', () => {
        const handleClick = vi.fn()
        render(
            <Button 
                onClick={handleClick}
                variant="none"
            >
                Click me
            </Button>
        )

        const button = screen.getByText('Click me')
        fireEvent.click(button)
        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    test('renders a disabled button', () => {
        render(
            <Button 
                disabled={true}
                variant="ghost"
            >
                Click me
            </Button>
        )

        const button = screen.getByText('Click me')
        expect(button).toBeDefined()
        expect(button.getAttribute('class')).toContain('cursor-not-allowed')
    })
})