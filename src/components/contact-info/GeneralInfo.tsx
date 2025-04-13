import AppLink from "@components/ui/app-links/AppLink"
import ApproachInfo from "./ApproachInfo"
import Text from "@components/ui/texts/Text"
import Title from "@components/ui/texts/Title"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useThemeProvider } from "@hooks/useThemeProvider"
import { mediaLinks } from "@utils/mediaLinks"

export default function GeneralInfo() {
    const { theme } = useThemeProvider()

    return (
        <section className="w-full flex flex-col items-start gap-1">
            <Title 
                as="h4" 
                className={`
                    text-base font-normal
                    ${theme === 'dark' ? 'text-primary-light' : 'text-primary-dark'}
                `}
            >
                Contact Information
            </Title>
            <Title as="h2" className="font-normal text-4xl">How to find us</Title>
            <Text className="text-sm font-light mt-3">
                If you have any questions, please do not hesitate to contact us. Our team will 
                be happy to help you. You can reach us via email or phone, or visit us at our office.
            </Text>
            <ApproachInfo />
            <Text className="text-sm font-light my-2">
                You can also find us on social media. Follow us for the latest news and updates.
            </Text>
            <section className="flex items-center gap-4 mt-2">
                {mediaLinks.map(link => (
                    <AppLink
                        to={link.url}
                        key={link.id}
                        className={`
                            flex items-center justify-center w-10 h-10 rounded-full bg-neutral-background-highlight 
                            hover:bg-neutral-background-highlight/50 md:w-11 md:h-11 transition-colors duration-300 
                            ${theme === 'dark' ? 'backdrop-brightness-200' : 'backdrop-brightness-75'}   
                        `}
                        target="_blank"
                    >
                        <FontAwesomeIcon 
                            icon={link.icon} 
                            title={link.platform} 
                            className={`
                                text-xl
                                ${theme === 'dark' ? 'text-neutral-text-highlight' : link.color}   
                            `} 
                        />
                    </AppLink>
                ))}
            </section>
        </section>
    )
}