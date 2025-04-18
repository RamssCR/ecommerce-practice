import { useId } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useThemeProvider } from '@hooks/useThemeProvider'
import { contactInfo } from '@utils/contact'
import AppLink from '@components/ui/app-links/AppLink'
import Text from '@components/ui/texts/Text'

export default function ApproachInfo() {
    const infoId = useId()
    const { theme } = useThemeProvider()
    const [whatsapp, location, email] = contactInfo

    return (
        <>
            <AppLink 
                to="https://api.whatsapp.com/send?phone=1234567890&text=Hello%20there!"
                target="_blank"
                title="WhatsApp"
                className="my-3 flex items-center gap-2 hover:cursor-pointer"
            >
                <FontAwesomeIcon
                    icon={whatsapp.icon}
                    className={`
                        text-3xl ${theme === 'dark' ? 'text-neutral-text-highlight' : 'text-green-600'}
                    `}
                />
                <Text className="text-sm">{whatsapp.value}</Text>
            </AppLink>
            <section className='flex flex-col items-start gap-3'>
                {[location, email].map((item, index) => (
                    <Text 
                        key={`${infoId}-${index}`} 
                        className="text-[0.95em]"
                    >
                        {item.value}
                    </Text>
                ))}
            </section>
        </>
    )
}