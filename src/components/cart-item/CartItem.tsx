import type { CartItemProps } from '@localTypes/productTypes'
import Image from '@components/ui/images/Image'
import Text from '@components/ui/texts/Text'
import Title from '@components/ui/texts/Title'
import { useThemeProvider } from '@hooks/useThemeProvider'
import AppLink from '@components/ui/app-links/AppLink'
import CartItemActions from './CartItemActions'
import { currencyFormat } from '@utils/currencyFormat'

export default function CartItem(product: CartItemProps) {
    const { theme } = useThemeProvider()

    return (
        <article className="w-full flex flex-col items-center gap-4 md:flex-row md:gap-6 md:items-start">
            <div 
                className={`
                    w-full h-full rounded-lg shadow-md md:w-40 md:h-34
                    ${theme === 'dark' ? 'bg-neutral-background-highlight' : 'bg-white'}
                `}
            >
                <Image
                    src={product.image}
                    alt={product.name}
                    title={product.name}
                    className="w-full h-full object-contain"
                />
            </div>
            <section className="w-full flex flex-col items-start gap-1">
                <article className="w-full flex items-baseline justify-between">
                    <Text className="text-primary uppercase font-medium">{product.category}</Text>
                    <Text className="font-semibold text-lg pr-2 md:pr-0">{`x${product.quantity}`}</Text>
                </article>
                <AppLink to={`/products/${product.slug}`}>
                    <Title 
                        as="h2" 
                        className="text-2xl font-medium line-clamp-2 hover:text-primary hover:line-clamp-none"
                        title={product.name}
                    >
                        {product.name}
                    </Title>
                </AppLink>
                <Text className="text-xs text-slate-400">{product.tax > 0 ? 'This product includes taxes.' : ''}</Text>
                <article className="w-full flex flex-col items-start gap-3 md:gap-0 md:flex-row md:items-center md:justify-between">
                    <Title 
                        as="h3"
                        className="text-4xl font-medium mt-2"
                    >
                        {currencyFormat(product.total)}
                    </Title>
                    <CartItemActions />
                </article>
            </section>
        </article>
    )
}