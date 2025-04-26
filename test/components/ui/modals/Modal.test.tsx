import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Modal from '@components/ui/modals/Modal'

describe('Modal', () => {
    test('renders Modal component with a right position', () => {
        render(<Modal position="right" isOpen={true} onClose={() => {}}>Test Modal</Modal>)
        expect(screen.getByText('Test Modal')).toBeDefined()
    })

    test('renders Modal component with a center position', () => {
        render(<Modal position="center" isOpen={true} onClose={() => {}}>Test Modal</Modal>)
        expect(screen.getByText('Test Modal')).toBeDefined()
    })
    
    test('does not render when isOpen is false', () => {
        render(<Modal isOpen={false} onClose={() => {}}>Test Modal</Modal>)
        expect(screen.queryByText('Test Modal')).toBeNull()
    })
})