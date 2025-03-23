import { useLocation } from 'react-router-dom'
import { links } from '@utils/navLinks'
import AppNavLink from '@components/ui/app-links/AppNavLink'
import Text from '@components/ui/texts/Text'
import Switch from '@components/ui/switches/Switch'

export default function MobileNavbar({ toggle }: { toggle: () => void }) {
    const { pathname } = useLocation()
    const category = pathname.split('/')[1]

    const NavLinkItem = ({ value }: { value: string }) => (
        <AppNavLink 
            to={`/${value}`}
            title={`Head to ${value}`}
            aria-label={`Heading to section ${value}`}
            onClick={toggle}
            className={`
                w-full text-lg font-medium py-3 px-4 rounded-md duration-100 transition
                ${value.toLowerCase() === category.toLowerCase()
                    ? 'bg-neutral-background-highlight'
                    : 'bg-transparent'
                }
            `}
        >
            {value}
        </AppNavLink>
    )

    return (
        <nav className="w-full flex flex-col items-start lg:hidden">
            {links.map((link, index) => <NavLinkItem key={index} value={link} />)}
            <div className="w-full flex items-center justify-between py-3 px-4">
                <Text className="text-lg font-medium">Dark mode</Text>
                <Switch />
            </div>
        </nav>
    )
}