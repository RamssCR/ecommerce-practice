import AppLink from '@components/ui/app-links/AppLink'
import { useId } from 'react'


type Paths = {
    name: string
    slug: string
}
type BreadcrumbProps = {
    links: Paths[]
}

export default function Breadcrumb({ links = [] }: BreadcrumbProps) {
    const linkId = useId()

    return (
        <nav
            aria-label='Breadcrumb'
            className='flex items-center gap-2 text-neutral-text/50 text-sm font-medium'
        >
            {links.map((link, index) => (
                <li key={`${linkId}-${link.slug}`} className='flex items-center gap-2'>
                    <AppLink 
                        to={`/${link.slug}`} 
                        title={`Head to ${link.name}`}
                        aria-label={`Head to ${link.name}`}
                        className='text-neutral-text hover:text-primary capitalize'
                    >
                        {link.name}
                    </AppLink>
                    {index < links.length - 1 && (
                        <span className='text-neutral-text/50'>&gt;</span>
                    )}
                </li>
            ))}
        </nav>
    )
}