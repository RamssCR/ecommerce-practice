import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Filters from '@components/filters/Filters'

describe('Filters', () => {
    test('renders Filters component', () => {
        render(<Filters />)

        expect(screen.getByText('Filters')).toBeDefined()
        expect(screen.getByText('Product Type')).toBeDefined()
        expect(screen.getByText('Product Size')).toBeDefined()
    })

    test('renders Filters component with custom className', () => {
        const { container } = render(<Filters className="custom-class" />)

        const filtersSection = container.querySelector('.flex-col.items-start.gap-2.custom-class')
        expect(filtersSection).toBeDefined()
    })
})