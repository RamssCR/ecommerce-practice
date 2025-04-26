import { act, render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Accordion from '@components/ui/accordions/Accordion'

describe('Accordion', () => {
    test('renders Accordion component correctly', () => {
        render(
            <Accordion title="Sample Accordion">
                <p>This is a sample accordion content.</p>
            </Accordion>
        )

        const title = screen.getByText('Sample Accordion')
        expect(title).toBeDefined()
    })

    test('toggles content visibility on click', () => {
        render(
            <Accordion title="Sample Accordion">
                <p>This is a sample accordion content.</p>
            </Accordion>
        )

        const title = screen.getByText('Sample Accordion')
        act(() => {
            title.click()

            const content = screen.getByText('This is a sample accordion content.')
            expect(content).toBeDefined()
        })
    })

    test('toggles content visibility on Enter key press', () => {
        render(
            <Accordion title="Sample Accordion">
                <p>This is a sample accordion content.</p>
            </Accordion>
        )

        const title = screen.getByText('Sample Accordion')
        act(() => {
            title.focus()
            title.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }))

            const content = screen.getByText('This is a sample accordion content.')
            expect(content).toBeDefined()
        })
    })
})