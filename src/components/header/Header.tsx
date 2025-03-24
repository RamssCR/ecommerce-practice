import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faX } from '@fortawesome/free-solid-svg-icons'
import { useThemeProvider } from '@hooks/useThemeProvider'
import Button from '@components/ui/buttons/Button'
import Container from '@components/ui/containers/Container'
import Image from '@components/ui/images/Image'
import AppNavLink from '@components/ui/app-links/AppNavLink'
import MobileNavbar from './MobileNavbar'
import Navbar from './Navbar'
import logo from '@assets/musioshore-header-logo.png'

export default function Header() {
    const { theme } = useThemeProvider()
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(prev => !prev)
    const iconStyle = "fill-neutral-text-highlight cursor-pointer text-xl"

    return (
        <header className="w-full grid place-items-center px-7 py-6 gap-y-4">
            <Container className="flex items-center justify-between">
                <AppNavLink to="/">
                    <Image 
                        src={logo} 
                        onClick={() => setIsOpen(false)} 
                        alt="MusioShore" 
                        title="MusioShore" 
                        className={`w-34 h-10 object-contain ${theme === 'dark' && 'brightness-0 invert'}`} 
                    />
                </AppNavLink>
                <section className="flex items-center gap-8">
                    <Button onClick={toggle} variant="none" className="lg:hidden">
                        <FontAwesomeIcon 
                            className={iconStyle}
                            title={isOpen ? 'Open the navigation menu' : 'Close the navigation menu'}
                            icon={isOpen ? faX : faBars} 
                        />
                    </Button>
                    <Navbar />
                    <AppNavLink to="/cart" className="relative" onClick={() => setIsOpen(false)}>
                            <FontAwesomeIcon
                                className={iconStyle}
                                title="Check your cart"
                                icon={faCartShopping}
                            />
                        <span
                            className={`
                                flex items-center justify-center size-[1.3rem] bg-primary rounded-full 
                                text-white text-sm font-medium absolute -top-3 -right-3 hover:brightness-110
                                `}
                                >
                            0
                        </span>
                    </AppNavLink>
                </section>
            </Container>
            {isOpen && <MobileNavbar toggle={toggle} />}
        </header>
    )
}