import AppLink from '@components/ui/app-links/AppLink'
import Image from '@components/ui/images/Image'
import multiBanner from '@assets/main-banner.webp'

/**
 * Component that renders a set of small banners
 * with links to each inner app section.
 * @example
 * <CollageBanner />
 */
export default function CollageBanner() {
    const Banner = ({ image, category }: { image: string, category: string }) => (
        <AppLink
            to={`/${category}`}
            title={`See ${category} products`}
        >
            <Image
                src={image}
                alt={category}
                className="w-full rounded-2xl max-h-[13rem] lg:max-h-[14rem]"
            />
        </AppLink>
    ) 

    return (
        <article className="grid grid-cols-1 gap-y-4 md:gap-x-4 md:grid-cols-2 xl:grid-cols-4">
            <Banner image={multiBanner} category="Wireless" />
            <Banner image={multiBanner} category="Headphones" />
            <Banner image={multiBanner} category="Speakers" />
            <Banner image={multiBanner} category="Accesssories" />
        </article>
    )
}