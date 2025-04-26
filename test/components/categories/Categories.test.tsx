import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import Categories from '@components/categories/Categories'

vi.mock(import('@components/categories/CategoryItem'), async (importOriginal) => {
    const original = await importOriginal()
    return {
        ...original,
        default: vi.fn(({ name, image }: { name: string, image: string }) => (
            <div data-testid="category-item" className="flex flex-col items-center gap-3">
                <img src={image} alt={name} title={`See ${name} category`} className="size-24 rounded-full bg-white shadow-md shadow-neutral-background-highlight lg:size-24 xl:size-30 lg:transition-transform lg:duration-200 lg:hover:scale-105" />
                <span className="text-xl hover:text-primary">{name}</span>
            </div>
        )),
    }
})

describe('Categories', () => {
    test('renders the component correctly', () => {
        render(
            <MemoryRouter>
                <Categories />
            </MemoryRouter>
        )

        const title = screen.getByText('Favorite items')
        const subtitle = screen.getByText('Check the most popular categories here!')
        const categories = screen.getAllByTestId('category-item')

        expect(title).toBeDefined()
        expect(subtitle).toBeDefined()
        expect(categories).toHaveLength(4)
    })
})