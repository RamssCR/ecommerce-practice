import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome"
import { faEarth, faWallet, faShield, faHeadset } from '@fortawesome/free-solid-svg-icons'

type ServicesMap = {
    icon: FontAwesomeIconProps["icon"]
    perk: string
    description: string
}

/**
  * This file contains a map of services offered by the company. 
  * Each service includes an icon, a perk, and a description.
  * The services are used in the UI to inform users about the 
  * benefits of shopping with the company.
*/
export const services: ServicesMap[] = [
    {
        icon: faEarth,
        perk: "Worldwide Shipping",
        description: "We ship to over 200 countries, ensuring that your products reach you no matter where you are.",
    },
    {
        icon: faWallet,
        perk: "100% Secure Payment",
        description: "Your payment information is encrypted and secure, giving you peace of mind while shopping.",
    },
    {
        icon: faShield,
        perk: "Money Back Guarantee",
        description: "If you're not satisfied with your purchase, we offer a hassle-free money-back guarantee.",
    },
    {
        icon: faHeadset,
        perk: "24/7 Customer Support",
        description: "Our dedicated support team is available 24/7 to assist you with any inquiries or issues.",
    },
] as const