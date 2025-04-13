import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter, faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons'
import socialMedia from '@data/socialMedia.json'

const mediaIcons = [faFacebook, faInstagram, faXTwitter, faTwitch, faYoutube] as const

type SocialMediaIcons = typeof socialMedia[number] & {
    icon: FontAwesomeIconProps['icon']
}

/**
  * This file is used to create a list of social media icons and their corresponding links.
  * The icons are imported from FontAwesome and the links are imported from a JSON file.
  * The icons are then mapped to the links and exported as an array of objects.
  * This allows for easy access to both the icon and link for each social media platform.
*/
export const mediaLinks: SocialMediaIcons[] = socialMedia?.map((media, index) => ({
    ...media,
    icon: mediaIcons[index],
}))