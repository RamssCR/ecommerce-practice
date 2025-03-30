import { useLocation } from 'react-router-dom'
import { useThemeProvider } from '@hooks/useThemeProvider'
import { links } from '@utils/navLinks'
import AppNavLink from '@components/ui/app-links/AppNavLink'
import Text from '@components/ui/texts/Text'
import Switch from '@components/ui/switches/Switch'

/**
 * Renders a component that displays the
 * Mobile's navigation menu.
 * @example
 * <MobileNavbar toggle={() => console.log('toggled!')} />
 */
export default function MobileNavbar({ toggle }: { toggle: () => void }) {
    const { theme, toggleTheme } = useThemeProvider()
    const { pathname } = useLocation()
    const category = pathname.split('/')[1]

    const NavLinkItem = ({ value }: { value: string }) => (
        <AppNavLink 
            to={`/${value}`}
            title={`Head to ${value || 'Home'}`}
            aria-label={`Heading to section ${value || 'Home'}`}
            onClick={toggle}
            className={`
                w-full text-lg font-medium py-3 px-4 rounded-md duration-100 transition capitalize
                ${value.toLowerCase() === category.toLowerCase()
                    ? 'bg-neutral-background-highlight'
                    : 'bg-transparent'
                }
            `}
        >
            {value || 'Home'}
        </AppNavLink>
    )

    return (
        <nav className="w-full flex flex-col items-start lg:hidden">
            {links.map((link, index) => <NavLinkItem key={index} value={link} />)}
            <div className="w-full flex items-center justify-between py-3 px-4">
                <Text className="text-lg font-medium">Dark mode</Text>
                <Switch checked={theme === 'dark'} onChange={toggleTheme} />
            </div>
        </nav>
    )
}