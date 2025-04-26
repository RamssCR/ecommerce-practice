import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import { useThemeProvider } from '@hooks/useThemeProvider'
import ServiceItem from '@components/service-item/ServiceItem'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'

vi.mock('@hooks/useThemeProvider')

describe('ServiceItem', () => {
    test('renders with dark theme', () => {
        (useThemeProvider as unknown as ReturnType<typeof vi.fn>).mockReturnValue({ theme: 'dark' })

        render(
            <ServiceItem 
                icon={faAddressBook}
                perk="Test Perk" 
                description="Test Description" 
            />
        )

        const icons = screen.getAllByText('Test Perk')
        expect(icons).toBeDefined()

        const descriptions = screen.getAllByText('Test Description')
        expect(descriptions).toBeDefined()
    })

    test('renders with light theme', () => {
        (useThemeProvider as unknown as ReturnType<typeof vi.fn>).mockReturnValue({ theme: 'light' })

        render(
            <ServiceItem 
                icon={faAddressBook}
                perk="Test Perk" 
                description="Test Description" 
            />
        )

        const icons = screen.getAllByText('Test Perk')
        expect(icons).toBeDefined()

        const descriptions = screen.getAllByText('Test Description')
        expect(descriptions).toBeDefined()
    })
})