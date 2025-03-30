import { useThemeProvider } from "@hooks/useThemeProvider"
import ProductImage from "./ProductImage"
import ProductTag from "./ProductTag"
import AppLink from "@components/ui/app-links/AppLink"
import Button from '@components/ui/buttons/Button'
import Title from '@components/ui/texts/Title'
import Text from '@components/ui/texts/Text'

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
                    <Title as="h3" className="text-lg font-semibold line-clamp-2 hover:cursor-pointer hover:text-primary">
                        LumiSound Pulse Pro X9000 - Smart LED Speaker
                    </Title>
                    <ProductTag tag="New" />
                </AppLink>
                <article className="mb-4">
                    <Text className="text-sm text-slate-400">$1,299.99</Text>
                    <article className="flex items-center gap-3">
                        <Title 
                            as="h4" 
                            className={`
                                text-xl font-bold 
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