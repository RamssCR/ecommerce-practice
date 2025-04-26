import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import { useThemeProvider } from '@hooks/useThemeProvider'
import ContactInfo from '@components/contact-info/ContactInfo'

vi.mock('@hooks/useThemeProvider')

describe('ContactInfo', () => {
    test('renders component with light theme', () => {
        (useThemeProvider as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
            theme: 'light',
        })

        render(
            <MemoryRouter>
                <ContactInfo />
            </MemoryRouter>
        )
        const title = screen.getByText('Contact Information')
        expect(title).toBeDefined()
    })

    test('renders component with dark theme', () => {
        (useThemeProvider as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
            theme: 'dark',
        })

        render(
            <MemoryRouter>
                <ContactInfo />
            </MemoryRouter>
        )
        const title = screen.getByText('How to find us')
        expect(title).toBeDefined()
    })
})