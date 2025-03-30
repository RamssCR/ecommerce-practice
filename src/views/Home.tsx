import { services } from '@utils/serviceMap'
import MainBanner from '@components/banners/MainBanner'
import Categories from '@components/categories/Categories'
import SaleCard from '@components/sale-card/SaleCard'
import ServiceItem from '@components/service-item/ServiceItem'
import Container from '@components/ui/containers/Container'
import NewProducts from '@components/new-products/NewProducts'

export default function Home() {
    return (
        <section className="mt-24 w-full px-4 py-6 bg-neutral-background md:px-8">
            <Container className="mx-auto flex flex-col gap-5">
                <MainBanner />
                <Categories />
                <section className="w-full grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
                    <SaleCard theme="pink" />
                    <SaleCard theme="purple" />
                    <SaleCard theme="blue" />
                </section>
                <section className="w-full grid grid-cols-1 gap-y-14 md:grid-cols-2 md:gap-x-5 lg:grid-cols-4 py-20">
                    {services.map((service, index) => (
                        <ServiceItem
                            key={index}
                            icon={service.icon}
                            perk={service.perk}
                            description={service.description}
                        />
                    ))}
                </section>
                <NewProducts />
            </Container>
        </section>
    )
}