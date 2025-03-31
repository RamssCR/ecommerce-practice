import AppLink from '@components/ui/app-links/AppLink'
import Image from '@components/ui/images/Image'
import Title from '@components/ui/texts/Title'
import mainBanner from '@assets/main-banner.webp'

/**
 * Renders a component that displays
 * the main banner of the application.
 * @example
 * <MainBanner />
 */
export default function MainBanner() {
    return (
        <article className="w-full rounded-2xl relative overflow-hidden">
            <Image
                src={mainBanner}
                alt="Main Banner"
                className="w-full relative lg:max-h-[34em]"
            />
            <section className="absolute top-0 left-0 w-full h-full bg-black/55 flex flex-col justify-center items-center gap-5 xl:gap-4 text-center px-6">
                <Title as="h2" className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
                    Discover the latest products here in MusioShore.
                </Title>
                <AppLink 
                    to="/new-products"
                    className="py-3 px-7 w-fit rounded-lg bg-primary text-white md:mt-4 hover:brightness-110"
                >
                    View Products
                </AppLink>
            </section>
        </article>
    );
}
