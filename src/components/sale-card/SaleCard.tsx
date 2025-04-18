import { classMerger } from '@utils/classMerger'
import AppLink from '@components/ui/app-links/AppLink'
import Title from '@components/ui/texts/Title'

type SaleCardProps = {
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
            'w-full flex flex-col items-end justify-between gap-6 p-6 rounded-lg overflow-hidden',
            theme !== "background" && 'bg-radial-[at_50%_75%] to-90% text-white',
            variants[theme]
        )}>
            <span className="block py-2 text-lg px-6 border border-slate-100 rounded-xl">60% OFF</span>
            <Title as="h2" className="mb-3 text-2xl font-medium text-right text-white xl:text-3xl">Wireless Headset</Title>
            <AppLink
                to="/products/wireless-headset"
                className="py-3 bg-amber-300 font-medium px-6 rounded-xl text-black"
            >
                Check it out!
            </AppLink>
        </article>
    )
}