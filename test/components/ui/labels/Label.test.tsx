import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Label from '@components/ui/labels/Label'

describe('Label', () => {
    test('renders correctly', () => {
        render(<Label htmlFor="test" required={false}>Test Label</Label>)

        const label = screen.getByText('Test Label')
        expect(label).toBeDefined()
        expect(label.getAttribute('for')).toBe('test')
    })

    test('renders with required asterisk', () => {
        render(<Label htmlFor="test">Test Label</Label>)

        const asterisk = screen.getByText('*')
        expect(asterisk).toBeDefined()
    })
})