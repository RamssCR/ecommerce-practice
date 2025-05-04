import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import SaleCard from '@components/home/sale-card/SaleCard'

describe('SaleCard', () => {
    test('renders with default theme', () => {
        render(
            <MemoryRouter>
                <SaleCard theme="pink" />
            </MemoryRouter>
        )

        const saleCard = screen.getByRole('article')
        expect(saleCard).toBeDefined()
    })

    test('renders with background theme', () => {
        render(
            <MemoryRouter>
                <SaleCard theme="background" />
            </MemoryRouter>
        )

        const saleCard = screen.getByRole('article')
        expect(saleCard).toBeDefined()
    })
})