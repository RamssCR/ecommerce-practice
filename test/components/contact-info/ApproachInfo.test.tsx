import { type ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import { ThemeContext, type ThemeContextType } from '@context/ThemeContext'
import ApproachInfo from '@components/contact-info/ApproachInfo'

const wrapper = ({ children, theme }: { children: ReactNode, theme: ThemeContextType['theme'] }) => (
    <ThemeContext.Provider value={{ theme, toggleTheme: vi.fn() }}>
        <MemoryRouter>
            {children}
        </MemoryRouter>
    </ThemeContext.Provider>
)

describe('ApproachInfo', () => {
    test('renders general information component correctly with dark theme', () => {
        render(wrapper({ children: <ApproachInfo />, theme: 'dark' }))

        const email = screen.getByText('support.music@musioshore.com')
        expect(email).toBeDefined()
    })

    test('renders general information component correctly with light theme', () => {
        render(wrapper({ children: <ApproachInfo />, theme: 'light' }))

        const email = screen.getByText('123 Main Street, Suite 100, New York, NY 10001')
        expect(email).toBeDefined()
    })
})