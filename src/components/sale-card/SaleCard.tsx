import { classMerger } from '@utils/classMerger'
import AppLink from '@components/ui/app-links/AppLink'
import Image from '@components/ui/images/Image'
import Title from '@components/ui/texts/Title'
import headsetsImage from '/mock-images/categories/headsets.avif'

interface SaleCardProps {
    theme?: 'purple' | 'scarlet' | 'pink' | 'blue' | 'background'
}

export default function SaleCard({ theme = "background" }: SaleCardProps) {
    const variants = {
        background: 'bg-neutral-text-highlight text-neutral-background',
        purple: 'from-purple-400 via-purple-500 to-purple-700',
        scarlet: 'from-purple-300 via-pink-300 to-pink-400',
        pink: 'from-pink-400 via-pink-500 to-pink-700',
        blue: 'from-blue-400 via-blue-500 to-blue-700'
    }

    return (
        <article className={classMerger(
            'grid grid-cols-2 py-6 pl-2 pr-5 rounded-lg overflow-hidden place-items-center lg:pr-6',
            theme !== "background" && 'bg-radial-[at_50%_75%] to-90% text-white',
            variants[theme]
        )}>
            <Image
                src={headsetsImage}
                className="scale-130 ml-2 md:ml-4"
            />
            <section className="w-full flex flex-col items-end justify-between gap-6">
                <span className="block py-2 text-lg px-6 border border-slate-100 rounded-xl">60% OFF</span>
                <Title as="h2" className="mb-3 text-2xl font-medium text-right text-white xl:text-4xl">Wireless Headset</Title>
                <AppLink
                    to="/products/wireless-headset"
                    className="py-3 bg-amber-300 font-medium px-6 rounded-xl text-black"
                >
                    Check it out!
                </AppLink>
            </section>
        </article>
    )
}