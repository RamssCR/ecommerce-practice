import { act, render, screen, waitFor } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import Checkbox from '@components/ui/checkboxes/Checkbox'

describe('Checkbox', () => {
    test('renders the component with default props', () => {
        render(<Checkbox />)
        const checkbox = screen.getByRole('checkbox')

        expect(checkbox).toBeDefined()
        expect(checkbox.getAttribute('checked')).toBeNull()
    })

    test('renders the component checked with a title', () => {
        const { container } = render(
            <Checkbox 
                checked={true}
                title="Test Checkbox" 
            />
        )
        const checkbox = container.querySelector('.sr-only')
        const label = screen.getByText('Test Checkbox')

        expect(checkbox).toBeDefined()
        expect(checkbox?.getAttribute('checked')).toBe('')
        expect(label).toBeDefined()
    })

    test('performs toggle action on click', async () => {
        render(
            <Checkbox 
                checked={false}
                title="Test Checkbox" 
            />
        )
        
        const label = screen.getByText('Test Checkbox')
        const checkbox = screen.getByRole('checkbox')
        expect(checkbox.getAttribute('checked')).toBeNull()

        await act(async () => {
            label.click()

            waitFor(() => {
                expect(checkbox.getAttribute('checked')).toBe('')
            })
        })

    })
})