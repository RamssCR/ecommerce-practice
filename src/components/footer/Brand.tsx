import { links } from '@utils/navLinks'
import AppLink from '@components/ui/app-links/AppLink'
import Image from '@components/ui/images/Image'
import logo from '@assets/musioshore-header-logo.png'

export default function Brand() {
    return (
        <section className="w-full flex flex-col items-center gap-6 md:items-start lg:flex-row lg:justify-between lg:items-center">
            <AppLink to="/">
                <Image src={logo} alt="MusioShore" title="MusioShore" className="w-40 h-14 object-contain" />
            </AppLink>
            <nav className="flex flex-col items-center gap-3 md:flex-row md:gap-11">
                {links.map((link, index) => (
                    <AppLink 
                        key={index} 
                        to={link}
                        title={`Head to ${link}`}
                        className="text-lg font-medium hover:text-primary"
                    >
                        {link}
                    </AppLink>
                ))}
            </nav>
        </section>
    )
}