import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import AppLink from '@components/ui/app-links/AppLink'

describe('AppLink', () => {
    test('renders the component with all required props', () => {
        render(
            <MemoryRouter>
                <AppLink to="/checkout" className="p-3">
                    Proceed to checkout
                </AppLink>
            </MemoryRouter>
        )

        const linkElement = screen.getByText('Proceed to checkout')
        
        expect(linkElement).toBeDefined()
        expect(linkElement.getAttribute('href')).toBe('/checkout')
        expect(linkElement.className).toContain('p-3')
    })

    test('renders the component with an external URL', () => {
        render(
            <MemoryRouter>
                <AppLink 
                    to="https://random-website.com" 
                    target="_blank" 
                    className="text-slate-300 hover:-mt-3"
                >
                    Head to this website
                </AppLink>
            </MemoryRouter>
        )

        const linkElement = screen.getByText('Head to this website')

        expect(linkElement).toBeDefined()
        expect(linkElement.getAttribute('href')).toBe('https://random-website.com')
        expect(linkElement.className).toContain('text-slate-300 hover:-mt-3')
        expect(linkElement.getAttribute('rel')).toBe('noopener noreferrer')
    })
})