import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import MobileFilters from '@components/filters/MobileFilters'

describe('MobileFilters', () => {
    test('renders component correctly', () => {
        const mockOnClose = vi.fn()
        render(<MobileFilters isOpen={true} onClose={mockOnClose} />)

        const title = screen.getByText('Filters')
        const inStockCheckbox = screen.getByLabelText('In Stock')

        expect(title).toBeDefined()
        expect(inStockCheckbox).toBeDefined()
    })

    test('calls onClose when button is clicked', () => {
        const mockOnClose = vi.fn()
        render(<MobileFilters isOpen={true} onClose={mockOnClose} />)

        const button = screen.getByRole('button', { name: 'See my selections' })
        button.click()

        expect(mockOnClose).toHaveBeenCalledTimes(1)
    })
})