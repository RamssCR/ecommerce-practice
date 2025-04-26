import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Input from '@components/ui/textboxes/Input'

describe('Input', () => {
    test('renders with default props', () => {
        render(<Input />)
        expect(screen.getByPlaceholderText('Text something here...')).toBeDefined()
    })

    test('renders with icon', () => {
        render(<Input icon={faMagnifyingGlass} />)
        expect(screen.getByRole('textbox')).toBeDefined()
    })

    test('renders with custom placeholder', () => {
        render(<Input placeholder="Custom placeholder" />)
        expect(screen.getByPlaceholderText('Custom placeholder')).toBeDefined()
    })
})