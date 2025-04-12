import { useThemeProvider } from "@hooks/useThemeProvider"
import ProductImage from "./ProductImage"
import ProductTag from "./ProductTag"
import AppLink from "@components/ui/app-links/AppLink"
import Button from '@components/ui/buttons/Button'
import Title from '@components/ui/texts/Title'
import Text from '@components/ui/texts/Text'
import RatingCard from "@components/rating-card/RatingCard"

export default function ProductCard() {
    const { theme } = useThemeProvider()

    return (
        <article className={`
            w-full max-w-sm flex flex-col gap-4 p-6 rounded-xl shadow-lg hover:shadow-xl
            ${theme === 'dark' ? 'bg-neutral-background-highlight' : 'bg-white'}
        `}>
            <ProductImage />
            <section className="space-y-2">
                <AppLink to="/products/wireless-headsets" className="flex justify-between items-start gap-6">
                    <Title 
                        as="h3" 
                        title="LumiSound Pulse Pro X9000 - Smart LED Speaker"
                        className="text-lg font-semibold line-clamp-2 hover:cursor-pointer hover:text-primary"
                    >
                        LumiSound Pulse Pro X9000 - Smart LED Speaker
                    </Title>
                    <ProductTag tag="New" />
                </AppLink>
                <section className="flex items-center min-[425px]:flex-col min-[425px]:items-start gap-2 md:flex-row">
                    <RatingCard rating={4} size="small" />
                    <Text className="text-[0.75rem] h-fit text-slate-400">(12 Reviews)</Text>
                </section>
                <article className="my-4">
                    <Text className="text-sm text-slate-400 min-[425px]:mb-2 md:mb-0">$1,299.99</Text>
                    <article className="flex items-center min-[425px]:flex-col-reverse min-[425px]:items-start gap-2 md:flex-row">
                        <Title 
                            as="h4" 
                            className={`
                                text-xl font-semibold 
                                ${theme === 'dark' ? 'text-primary-light' : 'text-primary-dark'}
                            `}>
                                $999.00
                            </Title>
                        <ProductTag tag="-15%" />
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