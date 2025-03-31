import { services } from '@utils/serviceMap'
import MainBanner from '@components/banners/MainBanner'
import Categories from '@components/categories/Categories'
import SaleCard from '@components/sale-card/SaleCard'
import ServiceItem from '@components/service-item/ServiceItem'
import Container from '@components/ui/containers/Container'
import NewProducts from '@components/new-products/NewProducts'
import Title from '@components/ui/texts/Title'
import TestimonialCard from '@components/testimonial-card/TestimonialCard'

export default function Home() {
    return (
        <section className="mt-24 w-full px-4 py-6 bg-neutral-background md:px-8">
            <Container className="mx-auto flex flex-col gap-5">
                <MainBanner />
                <Categories />
                {/* Products on promotion */}
                <section className="w-full grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
                    <SaleCard theme="pink" />
                    <SaleCard theme="purple" />
                    <SaleCard theme="blue" />
                </section>
                {/* Services provided by the company */}
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
                {/* Highlighted testimonials cards */}
                <section className="w-full flex flex-col items-center gap-12 py-16">
                    <Title as="h2" className="text-3xl uppercase lg:text-4xl">Our customers say</Title>
                    <section className="grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-10">
                        {Array(3).fill(0).map((_, index) => <TestimonialCard key={index} />)}
                    </section>
                </section>
            </Container>
        </section>
    )
}