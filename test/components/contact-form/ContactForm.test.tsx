import { fireEvent, screen, render, waitFor } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import ContactForm from '@components/contact-form/ContactForm'

describe('ContactForm', () => {
    test('renders the component correctly', () => {
        render(<ContactForm />)

        const title = screen.getByText('Contact Us')
        expect(title).toBeDefined()

        const emailField = screen.getByText('email')
        expect(emailField).toBeDefined()
    })

    test('displays error message when missing required fields', async () => {
        render(<ContactForm />)

        const button = screen.getByRole('button', { name: 'Submit' })
        expect(button).toBeDefined()

        fireEvent.click(button)

        await waitFor(async () => {
            const errorMessage = screen.queryByText('Oops, something went wrong!')
            expect(errorMessage).toBeDefined()
        })
    })

    test('displays success message when form is submitted successfully', async () => {
        render(<ContactForm />)

        const nameInput = screen.getByPlaceholderText('Your Name')
        const emailInput = screen.getByPlaceholderText('Your Email')
        const phoneInput = screen.getByPlaceholderText('Your Phone')
        const messageInput = screen.getByPlaceholderText('Your Message')
        const button = screen.getByRole('button', { name: 'Submit' })

        fireEvent.change(nameInput, { target: { value: 'John Doe' } })
        fireEvent.change(emailInput, { target: { value: 'example@example.com' } })
        fireEvent.change(phoneInput, { target: { value: '1234567890' } })
        fireEvent.change(messageInput, { target: { value: 'Hello!' } })

        fireEvent.click(button)

        await waitFor(async () => {
            const successMessage = screen.queryByText('Your message has been sent!')
            expect(successMessage).toBeDefined()
        })
    })
})