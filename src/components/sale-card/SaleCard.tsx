import { classMerger } from '@utils/classMerger'
import AppLink from '@components/ui/app-links/AppLink'
import Title from '@components/ui/texts/Title'

type SaleCardProps = {
    name: string
    percentage: number
    image: string
    slug: string
}

export default function SaleCard({ name, image, percentage, slug }: SaleCardProps) {
    return (
        <article 
            className={classMerger(
                'w-full flex flex-col items-start justify-between gap-6 p-6 rounded-lg overflow-hidden',
                'bg-cover bg-center bg-no-repeat',
            )}
            style={{ backgroundImage: `linear-gradient(#00000011, #00000011) ,url(${image})` }}
        >
            <span className="block py-2 text-lg px-6 border text-white border-slate-100 rounded-xl">{`${percentage}% OFF`}</span>
            <Title as="h2" className="mb-3 text-2xl font-medium text-right text-white xl:text-3xl">{name}</Title>
            <AppLink
                to={`/products/${slug}`}
                className="py-3 bg-amber-300 font-medium px-6 rounded-xl text-black"
            >
                Check it out!
            </AppLink>
        </article>
    )
}