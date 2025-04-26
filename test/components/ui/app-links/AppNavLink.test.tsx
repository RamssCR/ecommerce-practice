import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import AppNavLink from '@components/ui/app-links/AppNavLink'

describe('AppNavLink', () => {
    test('renders the link component correctly', () => {
        render(
            <MemoryRouter>
                <AppNavLink to="/home" className="p-2 bg-teal-50">Home</AppNavLink>
            </MemoryRouter>
        )

        const navlinkElement = screen.getByText('Home')
        expect(navlinkElement).toBeDefined()
        expect(navlinkElement.getAttribute('href')).toBe('/home')
        expect(navlinkElement.className).toContain('text-neutral-text')
    })
})