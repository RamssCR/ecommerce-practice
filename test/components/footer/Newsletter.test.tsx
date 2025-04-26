import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Newsletter from '@components/footer/Newsletter'

describe('Newsletter', () => {
    test('renders the newsletter component', () => {
        render(<Newsletter />)
        const title = screen.getByText('Subscribe to our Newsletter!')
        const input = screen.getByPlaceholderText('Enter your email address')
        const button = screen.getByRole('button', { name: 'Subscribe' })
        
        expect(title).toBeDefined()
        expect(input).toBeDefined()
        expect(button).toBeDefined()
    })
})