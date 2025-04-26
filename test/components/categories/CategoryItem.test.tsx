import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import CategoryItem from '@/components/categories/CategoryItem'

describe('CategoryItem', () => {
    test('renders with all required props', () => {
        render(
            <MemoryRouter>
                <CategoryItem
                    name="Test Category"
                    image="/path/to/image.jpg"
                />
            </MemoryRouter>
        )

        const linkElement = screen.getByRole('link')
        const imageElement = screen.getByRole('img', { name: 'Test Category' })

        expect(linkElement).toBeDefined()
        expect(linkElement.getAttribute('href')).toBe('/Test Category')

        expect(imageElement).toBeDefined()
        expect(imageElement.getAttribute('src')).toBe('/path/to/image.jpg')
    })
})