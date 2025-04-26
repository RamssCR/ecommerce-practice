import { MemoryRouter } from 'react-router-dom'
import { render, screen, waitFor } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import { useThemeProvider } from '@hooks/useThemeProvider'
import Navbar from '@components/header/Navbar'
import { act } from 'react'

vi.mock('@hooks/useThemeProvider')
const toggleThemeMock = vi.fn()

describe('Navbar', () => {
    test('renders the Navbar component', () => {
        (useThemeProvider as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
            theme: 'light',
            toggleTheme: vi.fn(),
        })
        render(
            <MemoryRouter initialEntries={['/products']}>
                <Navbar />
            </MemoryRouter>
        )

        const link = screen.getByText('products')
        expect(link).toBeDefined()
    })

    test('toggles theme when button is clicked', async () => {
        (useThemeProvider as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
            theme: 'light',
            toggleTheme: toggleThemeMock,
        })

        render(
            <MemoryRouter initialEntries={['/home']}>
                <Navbar />
            </MemoryRouter>
        )

        const button = screen.getByRole('button', { name: 'Light Mode' })
        expect(button).toBeDefined()

        await act(async () => {
            button.click()
            expect(toggleThemeMock).toHaveBeenCalled()

            waitFor(() => {
                expect(button.textContent).toBe('Dark Mode')
            })
        })
        
    })
})