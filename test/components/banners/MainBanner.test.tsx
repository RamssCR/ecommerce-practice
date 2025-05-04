import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import MainBanner from '@components/home/banners/MainBanner'

describe('MainBanner', () => {
    test('renders the main banner component', () => {
        render(
            <MemoryRouter>
                <MainBanner />
            </MemoryRouter>
        )

        const banner = screen.getByRole('img', { name: 'Main Banner' })
        const title = screen.getByText('Discover the latest products here in MusioShore.')

        expect(banner).toBeDefined()
        expect(title).toBeDefined()
    })
})