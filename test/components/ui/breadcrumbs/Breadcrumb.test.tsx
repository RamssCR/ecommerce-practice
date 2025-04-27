import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Breadcrumb from '@components/ui/breadcrumbs/Breadcrumb'
import { BrowserRouter } from 'react-router-dom'

describe('Breadcrumb', () => {
    const links = [
        { name: 'home', slug: '' },
        { name: 'products', slug: 'products' },
        { name: 'electronics', slug: 'electronics' }
    ]

    const renderBreadcrumb = (props = {}) => {
        return render(
            <BrowserRouter>
                <Breadcrumb links={links} {...props} />
            </BrowserRouter>
        )
    }

    it('should render breadcrumb navigation', () => {
        renderBreadcrumb()
        const nav = screen.getByRole('navigation')
        expect(nav).toBeDefined()
        expect(nav.getAttribute('aria-label')).toBe('Breadcrumb')
    })

    it('should render all links', () => {
        renderBreadcrumb()
        links.forEach(link => {
            const linkElement = screen.getByText(link.name)
            expect(linkElement).toBeDefined()
        })
    })

    it('should render correct number of separator symbols', () => {
        renderBreadcrumb()
        const separators = screen.getAllByText('>')
        expect(separators).toHaveLength(links.length - 1)
    })

    it('should render links with correct href attributes', () => {
        renderBreadcrumb()
        links.forEach(link => {
            const linkElement = screen.getByTitle(`Head to ${link.name}`)
            expect(linkElement.getAttribute('href')).toBe(`/${link.slug}`)
        })
    })

    it('should render empty nav when no links provided', () => {
        render(
            <BrowserRouter>
                <Breadcrumb links={[]} />
            </BrowserRouter>
        )
        const nav = screen.getByRole('navigation')
        expect(nav).toBeDefined()
        expect(nav.children.length).toBe(0)
    })
})