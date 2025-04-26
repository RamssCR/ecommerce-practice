import { MemoryRouter } from 'react-router-dom'
import { act, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import { useThemeProvider } from '@hooks/useThemeProvider'
import MobileNavbar from '@components/header/MobileNavbar'

vi.mock('@hooks/useThemeProvider')
const mockToggleTheme = vi.fn()

describe('MobileNavbar', () => {
    test('renders the component', () => {
        (useThemeProvider as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
            theme: 'light',
            toggleTheme: vi.fn(),
        })
        const toggle = vi.fn()
        render(
            <MemoryRouter initialEntries={['/home']}>
                <MobileNavbar toggle={toggle} />
            </MemoryRouter>
        )

        expect(screen.getByText('Dark mode')).toBeDefined()
    })

    test('calls toggle function when a link is clicked', async () => {
        (useThemeProvider as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
            theme: 'light',
            toggleTheme: mockToggleTheme,
        })
        const toggle = vi.fn()
        render(
            <MemoryRouter initialEntries={['/home']}>
                <MobileNavbar toggle={toggle} />
            </MemoryRouter>
        )

        const homeLink = screen.getByText('Home')

        await act(async () => {
            homeLink.click()
            expect(toggle).toHaveBeenCalled()
        })
    })

    test('toggles dark mode', async () => {
        (useThemeProvider as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
            theme: 'light',
            toggleTheme: mockToggleTheme,
        })
        const toggle = vi.fn()
        render(
            <MemoryRouter initialEntries={['/home']}>
                <MobileNavbar toggle={toggle} />
            </MemoryRouter>
        )

        const switchButton = screen.getByRole('checkbox')
        act(() => {
            switchButton.click()
        })

        await waitFor(() => expect(mockToggleTheme).toHaveBeenCalled())
    })
})