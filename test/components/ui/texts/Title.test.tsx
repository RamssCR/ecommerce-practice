import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Title from '@components/ui/texts/Title'

describe('Title', () => {
    test('renders component with default props', () => {
        render(<Title as="h2">Sample title</Title>)
        expect(screen.getByText('Sample title')).toBeDefined()
        expect(screen.getByText('Sample title').className).toContain('text-3xl')
    })
})