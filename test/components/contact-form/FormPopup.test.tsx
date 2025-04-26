import { render, screen, waitFor } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import FormPopup from '@components/contact-form/FormPopup'
import { act } from 'react'

describe('FormPopup', () => {
    test('renders the component with success type', async () => {
        const onClose = vi.fn()
        render(
            <FormPopup
                isOpen={true}
                onClose={onClose}
                type="success"
            />
        )

        const message = screen.getByText('Your message has been sent!')
        expect(message).toBeDefined()

        const button = screen.getByRole('button', { name: 'Close popup' })
        expect(button).toBeDefined()

        await act(async () => {
            button.click()
            expect(onClose).toHaveBeenCalled()

            waitFor(() => {
                const nonExistingMessage = screen.queryByText('Your message has been sent!')
                expect(nonExistingMessage).toBeNull()
            })
        })
    })

    test('renders the component with error type', () => {
        const onClose = vi.fn()
        render(
            <FormPopup
                isOpen={true}
                onClose={onClose}
                type="error"
            />
        )

        const message = screen.getByText('Oops, something went wrong!')
        expect(message).toBeDefined()

        const button = screen.getByRole('button', { name: 'Close popup' })
        expect(button).toBeDefined()
    })
})