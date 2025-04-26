import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import Header from '@components/header/Header'

vi.mock('@hooks/useThemeProvider', () => ({
    useThemeProvider: vi.fn().mockReturnValue({ 
        theme: 'light',
        toggleTheme: vi.fn(),
    })
}))

describe('Header', () => {
    test('renders the header with logo and navigation links', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        )

        const logo = screen.getByAltText('MusioShore')
        expect(logo).toBeDefined()
    })
})