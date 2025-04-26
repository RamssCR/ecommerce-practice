import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Legal from '@components/footer/Legal'

describe('Legal', () => {
    test('renders copyright text', () => {
        render(
            <MemoryRouter>
                <Legal />
            </MemoryRouter>
        )
        const copyrightText = screen.getByText('Copyright 2025 MusioShore. All rights reserved.')
        expect(copyrightText).toBeDefined()
    })

    test('renders developer information', () => {
        render(
            <MemoryRouter>
                <Legal />
            </MemoryRouter>
        )
        const developerText = screen.getByText('Developed by')
        expect(developerText).toBeDefined()
    })
})