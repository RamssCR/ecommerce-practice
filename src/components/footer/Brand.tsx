import { links } from '@utils/navLinks'
import { useThemeProvider } from '@hooks/useThemeProvider'
import AppLink from '@components/ui/app-links/AppLink'
import Image from '@components/ui/images/Image'
import logo from '@assets/musioshore-header-logo.png'

/**
 * Renders a component that displays the
 * header of the app footer.
 * Displays the logo and links to other pages.
 * @example
 * <Brand />
 */
export default function Brand() {
    const { theme } = useThemeProvider()

    return (
        <section className="w-full flex flex-col items-center gap-6 md:items-start lg:flex-row lg:justify-between lg:items-center">
            <AppLink to="/">
                <Image 
                    src={logo} 
                    alt="MusioShore" 
                    title="MusioShore" 
                    className={`w-40 h-14 object-contain ${theme === 'dark' && 'brightness-0 invert'}`} />
            </AppLink>
            <nav className="flex flex-col items-center gap-3 md:flex-row md:gap-11">
                {links.map((link, index) => (
                    <AppLink 
                        key={index} 
                        to={link}
                        title={`Head to ${link || 'Home'}`}
                        className="text-lg font-medium hover:text-primary"
                    >
                        {link || 'Home'}
                    </AppLink>
                ))}
            </nav>
        </section>
    )
}