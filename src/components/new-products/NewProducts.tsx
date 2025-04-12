import ProductCard from "@components/product-card/ProductCard"
import AppLink from "@components/ui/app-links/AppLink"
import Title from "@components/ui/texts/Title"

export default function NewProducts() {
    return (
        <section className="w-full flex flex-col items-center gap-12 py-5">
            <Title as="h2" className="text-3xl uppercase">Check our new products</Title>
            <section className="w-full px-2 grid grid-cols-1 gap-y-5 md:grid-cols-3 md:gap-x-5 xl:grid-cols-4">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </section>
            <AppLink to="/products" className="text-white bg-primary py-4 px-8 rounded-xl">View All Products</AppLink>
        </section>
    )
}