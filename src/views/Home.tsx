import MainBanner from '@components/banners/MainBanner'
import Categories from '@components/categories/Categories'
import SaleCard from '@components/sale-card/SaleCard'
import Container from '@components/ui/containers/Container'

export default function Home() {
    return (
        <section className="w-full px-4 py-6 bg-neutral-background md:px-8">
            <Container className="mx-auto flex flex-col gap-5">
                <MainBanner />
                <Categories />
                <section className="mx-auto w-fit grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-6 xl:grid-cols-3">
                    <SaleCard theme="pink" />
                    <SaleCard theme="purple" />
                    <SaleCard theme="blue" />
                </section>
            </Container>
        </section>
    )
}