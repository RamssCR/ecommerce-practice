import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSliders } from "@fortawesome/free-solid-svg-icons"
import { useQuery } from "@tanstack/react-query"
import { getCategories } from "@services/localCategories"
import type { FilterRecord } from '@localTypes/filtersTypes'
import Button from "@components/ui/buttons/Button"
import Container from "@components/ui/containers/Container"
import Filters from "@components/filters/Filters"
import MobileFilters from "@components/filters/MobileFilters"
import ProductCard from "@components/product-card/ProductCard"
import products from '@data/products.json'

export default function Products() {
    const [modal, setModal] = useState(false)
    const toggleModal = () => setModal((prev) => !prev)
    const { data: categoryFilters } = useQuery({
        queryKey: ["filters"],
        queryFn: () => getCategories()
    })

    return (
        <section className="mt-24 w-full px-8 py-6 bg-neutral-background">
            <Container className="mx-auto grid grid-cols-1 gap-y-5 lg:grid-cols-4 lg:gap-x-6 xl:gap-x-10">
                <Filters className="hidden lg:flex" filters={categoryFilters as Record<string, FilterRecord>} />
                <section className="lg:col-span-3 w-full flex flex-col gap-5">
                    <Button 
                        variant="none" 
                        onClick={toggleModal} 
                        className="ml-auto lg:hidden"
                    >
                        <FontAwesomeIcon
                            icon={faSliders}
                            title="Filters"
                            className="text-xl text-neutral-text-highlight hover:cursor-pointer"
                        />
                    </Button>
                    <section className="w-full grid grid-cols-1 min-[425px]:grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-3 xl:gap-y-5 xl:gap-x-5">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                {...product}
                            />
                        ))}
                    </section>
                    {/* Mobile filter modal */}
                    <MobileFilters 
                        isOpen={modal} 
                        onClose={toggleModal} 
                        filters={categoryFilters as Record<string, FilterRecord>}
                    />
                </section>
            </Container>
        </section>
    )
}