import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import { useThemeProvider } from '@hooks/useThemeProvider'
import GeneralInfo from '@components/contact/contact-info/GeneralInfo'

vi.mock('@hooks/useThemeProvider')

describe('ApproachInfo', () => {
    test('renders component with light theme', () => {
        (useThemeProvider as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
            theme: 'light',
        })

        render(
            <MemoryRouter>
                <GeneralInfo />
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
                <GeneralInfo />
            </MemoryRouter>
        )
        const title = screen.getByText('How to find us')
        expect(title).toBeDefined()
    })
})