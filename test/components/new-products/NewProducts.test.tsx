import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import NewProducts from '@components/home/new-products/NewProducts'

vi.mock('@hooks/useThemeProvider', () => ({
    useThemeProvider: vi.fn().mockReturnValue({ theme: 'light' }),
}))

describe('NewProducts', () => {
    test('renders NewProducts component', () => {
        render(
            <MemoryRouter>
                <NewProducts />
            </MemoryRouter>
        )

        expect(screen.getByText('Check our new products')).toBeDefined()
        expect(screen.getByRole('link', { name: 'View All Products' })).toBeDefined()
    })
})