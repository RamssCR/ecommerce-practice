import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import Footer from '@components/footer/Footer'

vi.mock('@hooks/useThemeProvider', () => ({
    useThemeProvider: vi.fn().mockReturnValue({
        theme: 'light',
    })
}))

describe('Footer', () => {
    test('renders the footer component', () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        )

        // Check if the brand text is in the document
        const brandText = screen.getByText('Copyright 2025 MusioShore. All rights reserved.')
        expect(brandText).toBeDefined()
    })

    test('renders the newsletter subscription form', () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        )

        // Check if the newsletter subscription form is in the document
        const newsletterText = screen.getByText('Subscribe to our Newsletter!')
        expect(newsletterText).toBeDefined()
    })
})