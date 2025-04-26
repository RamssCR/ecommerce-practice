import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import { useThemeProvider } from '@hooks/useThemeProvider'
import Brand from '@components/footer/Brand'

vi.mock('@hooks/useThemeProvider')

describe('Brand', () => {
    test('renders the logo and links', () => {
        (useThemeProvider as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
            theme: 'light',
        })

        render(
            <MemoryRouter>
                <Brand />
            </MemoryRouter>
        )
        const logo = screen.getByRole('img', { name: 'MusioShore' })
        expect(logo).toBeDefined()
    })

    test('renders the logo with dark theme', () => {
        (useThemeProvider as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
            theme: 'dark',
        })

        render(
            <MemoryRouter>
                <Brand />
            </MemoryRouter>
        )
        const logo = screen.getByRole('img', { name: 'MusioShore' })
        expect(logo).toBeDefined()
    })
})