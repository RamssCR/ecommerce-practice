import { useLocation } from 'react-router-dom'
import { links } from '@utils/navLinks'
import { useThemeProvider } from '@hooks/useThemeProvider'
import AppNavLink from '@components/ui/app-links/AppNavLink'
import Button from '@components/ui/buttons/Button'

/**
 * Renders a component that displays the
 * Desktop's navigation menu.
 * @example
 * <Navbar />
 */
export default function Navbar() {
    const { theme, toggleTheme } = useThemeProvider()
    const { pathname } = useLocation()
    const category = pathname.split('/')[1]

    const Item = ({ value }: { value: string }) => (
        <li className="flex flex-col items-center gap-3">
            <AppNavLink 
                to={`/${value}`}
                title={`Head to ${value || 'Home'} page`}
                aria-label={`Heading to page ${value || 'Home'}`}
                className={`
                    px-5 py-2
                    ${value.toLowerCase() === category.toLowerCase() 
                        ? 'text-primary' 
                        : 'text-neutral-text-highlight'
                    }
                `}
            >
                {value || 'Home'}
            </AppNavLink>
        </li>
    )

    return (
        <nav className="hidden lg:block" id="navbar">
            <ul className="flex items-center gap-7">
                {links.map((link, index) => <Item key={index} value={link} />)}
                <Button 
                    variant="none" 
                    className={`
                        text-neutral-text-highlight font-medium hover:cursor-pointer
                        ${theme === 'dark' ? 'text-primary' : 'text-neutral-text-highlight'}
                    `}
                    onClick={toggleTheme}
                >
                    {theme === 'dark' ? 'Dark' : 'Light'} Mode
                </Button>
            </ul>
        </nav>
    )
}