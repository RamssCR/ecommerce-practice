import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { useThemeProvider } from '@hooks/useThemeProvider'
import Title from '@components/ui/texts/Title'
import Text from '@components/ui/texts/Text'

type ServiceItemProps = FontAwesomeIconProps & {
    perk: string
    description: string
}

export default function ServiceItem({ icon, perk, description }: ServiceItemProps) {
    const { theme } = useThemeProvider()

    return (
        <article className="w-full flex flex-col items-center gap-6 px-5 text-center">
            <FontAwesomeIcon
                icon={icon}
                title={perk}
                className={`
                    text-4xl p-5 rounded-full border-2
                    ${theme === 'dark' ? 'text-neutral-text-highlight border-neutral-text-highlight' : 'text-primary border-primary'}
                `}
            />
            <Title as="h3" className="text-neutral-text-highlight text-2xl font-semibold">{perk}</Title>
            <Text className="-mt-3">{description}</Text>
        </article>
    )
}