import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Textbox from '@components/ui/textboxes/Texbox'

describe('Textbox', () => {
    test('renders with default props', () => {
        render(<Textbox />)
        const textbox = screen.getByRole('textbox')
        expect(textbox).toBeDefined()
        expect(textbox.className).toBe('w-full rounded-lg focus:outline-none p-2 bg-transparent')
    })

    test('renders with custom className', () => {
        render(<Textbox className="custom-class" />)
        const textbox = screen.getByRole('textbox')
        expect(textbox.className).contain('custom-class')
    })

    test('renders with variant "form"', () => {
        render(<Textbox variant="form" />)
        const textbox = screen.getByRole('textbox')
        expect(textbox.className).toBe('w-full rounded-lg focus:outline-none py-3 px-4 bg-neutral-background-highlight placeholder:text-neutral-text-highlight/60')
    })

    test('renders with variant "none"', () => {
        render(<Textbox variant="none" />)
        const textbox = screen.getByRole('textbox')
        expect(textbox.className).toBe('w-full rounded-lg focus:outline-none')
    })
})