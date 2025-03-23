import { useLocation } from 'react-router-dom'
import { links } from '@utils/navLinks'
import AppNavLink from '@components/ui/app-links/AppNavLink'
import Button from '@components/ui/buttons/Button'

export default function Navbar() {
    const { pathname } = useLocation()
    const category = pathname.split('/')[1]

    const Item = ({ value }: { value: string }) => (
        <li className="flex flex-col items-center gap-3">
            <AppNavLink 
                to={`/${value}`}
                title={`Head to ${value}`}
                aria-label={`Heading to section ${value}`}
                className={`
                    px-5 py-2
                    ${value.toLowerCase() === category.toLowerCase() 
                        ? 'text-primary' 
                        : 'text-neutral-text-highlight'
                    }
                `}
            >
                {value}
            </AppNavLink>
        </li>
    )

    return (
        <nav className="hidden lg:block" id="navbar">
            <ul className="flex items-center gap-8">
                {links.map((link, index) => <Item key={index} value={link} />)}
                <Button 
                    variant="none" 
                    className="text-neutral-text-highlight font-medium hover:cursor-pointer"
                >
                    Dark Mode
                </Button>
            </ul>
        </nav>
    )
}