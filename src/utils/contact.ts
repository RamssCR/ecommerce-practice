import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import contact from '@data/contact.json'

const iconMap = [faWhatsapp, faLocationDot, faEnvelope] as const

type ContactInfoType = typeof contact[number] & {
    icon: FontAwesomeIconProps['icon']
}

export const contactInfo: ContactInfoType[] = contact.map((item, index) => ({
    ...item,
    icon: iconMap[index],
}))