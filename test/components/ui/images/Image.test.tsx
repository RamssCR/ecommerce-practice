import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Image from '@components/ui/images/Image'

describe('Image', () => {
    test('renders component with basic props and custom classNames', () => {
        render(
            <Image
                src="https://icons.example.com/waving"
                alt="Waving icon"
                title="Send a wave to your friends"
                className="size-12 md:size-14"
            />
        )

        const icon = screen.getByRole('img', { name: 'Waving icon' })
        expect(icon).toBeDefined()
        expect(icon.getAttribute('src')).toBe('https://icons.example.com/waving')
        expect(icon.getAttribute('alt')).toBe('Waving icon')
        expect(icon.getAttribute('title')).toBe('Send a wave to your friends')
        expect(icon.className).toContain('size-12 md:size-14')
    })
})