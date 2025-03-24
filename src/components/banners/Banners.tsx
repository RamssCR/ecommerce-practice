import CollageBanner from './CollageBanner'
import MainBanner from './MainBanner'

/**
 * Component that renders a main
 * banner with a collage that displays
 * a set of banners.
 * @example
 * <Banners />
 */
export default function Banners() {
    return (
        <section className="w-full flex flex-col gap-4">
            <MainBanner />
            <CollageBanner />
        </section>
    )
}