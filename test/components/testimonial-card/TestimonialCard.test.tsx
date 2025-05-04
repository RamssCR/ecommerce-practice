import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import TestimonialCard from '@components/home/testimonial-card/TestimonialCard'

vi.mock('@hooks/useThemeProvider', () => ({
    useThemeProvider: () => ({
        theme: 'light'
    })
}))

describe('TestimonialCard', () => {
    test('renders the TestimonialCard component', () => {
        render(<TestimonialCard />)

        const image = screen.getByRole('img', { name: 'Mark Grayson' })
        expect(image).toBeDefined()
    })
})