import { useThemeProvider } from "@hooks/useThemeProvider"
import type { ProductProps } from '@localTypes/productTypes'
import ProductImage from "./ProductImage"
import ProductTag from "./ProductTag"
import AppLink from "@components/ui/app-links/AppLink"
import Button from '@components/ui/buttons/Button'
import Title from '@components/ui/texts/Title'
import Text from '@components/ui/texts/Text'
import RatingCard from "@components/rating-card/RatingCard"
import { currencyFormat } from "@utils/currencyFormat"

export default function ProductCard(product: ProductProps) {
    const { theme } = useThemeProvider()

    return (
        <article className={`
            w-full max-w-sm flex flex-col gap-4 p-6 rounded-xl shadow-lg hover:shadow-xl
            ${theme === 'dark' ? 'bg-neutral-background-highlight' : 'bg-white'}
        `}>
            <ProductImage 
                name={product.name} 
                slug={product.slug} 
                image={product.image} 
                bookmarked={product.bookmarked} 
            />
            <section className="space-y-1">
                <Text className="text-sm text-primary capitalize">{product.category}</Text>
                <AppLink to={`/products/${product.slug}`} className="flex justify-between items-start gap-6">
                    <Title 
                        as="h3" 
                        title={product.name}
                        className="text-lg font-semibold h-15 line-clamp-2 hover:cursor-pointer hover:text-primary"
                    >
                        {product.name}
                    </Title>
                    {product.isNew && <ProductTag tag="New" />}
                </AppLink>
                <section className="flex items-center min-[425px]:flex-col min-[425px]:items-start gap-2 md:flex-row">
                    <RatingCard rating={product.rating} size="small" />
                    <Text className="text-[0.75rem] h-fit text-slate-400">{`${product.rating} points`}</Text>
                </section>
                <article className="my-4">
                    {product.price !== product.salePrice && 
                        <Text className="text-sm text-slate-400 min-[425px]:mb-2 md:mb-0">
                            {currencyFormat(product.price)}
                        </Text>
                    }
                    <article 
                        className={`
                            flex items-center gap-2
                            ${product.price === product.salePrice ? 'mt-9' : ''}
                        `}
                    >
                        <Title 
                            as="h4" 
                            className={`
                                text-xl font-semibold 
                                ${theme === 'dark' ? 'text-primary-light' : 'text-primary-dark'}
                            `}>
                                {currencyFormat(product.salePrice)}
                            </Title>
                        {product.discount > 0 && <ProductTag tag={`${product.discount}%`} />}
                    </article>
                </article>
                <Button 
                    variant="color-primary" 
                    className="w-full py-2 text-sm font-medium rounded-lg hover:cursor-pointer"
                >
                    Add to Cart
                </Button>
            </section>
        </article>
    )
}