import { useState, useId } from "react"
import CartItem from "@components/cart-item/CartItem"
import MobileSummary from "@components/summary/MobileSummary"
import Summary from "@components/summary/Summary"
import Button from "@components/ui/buttons/Button"
import Container from "@components/ui/containers/Container"
import Title from "@components/ui/texts/Title"

export default function Cart() {
    const [isOpen, setIsOpen] = useState(false)
    const productId = useId()
    const toggleModal = () => setIsOpen(prev => !prev)

    const product = {
        id: '1',
        bookmarked: false,
        category: 'headsets',
        cover: false,
        description: 'Sample product description',
        discount: 10,
        image: '/mock-images/categories/headsets.avif',
        isNew: true,
        name: 'Headsets Lumisound Pulse Pro X9000 - Smart LED Speaker',
        slug: 'wireless-headsets',
        price: 90,
        tax: 5,
        quantity: 2,
        total: 190
    }

    return (
        <section className="mt-24 w-full px-6 py-6 bg-neutral-background md:px-8">
            <Container className="mx-auto flex flex-col gap-3">
                <Title className="font-semibold pb-3 border-b border-slate-400/45 md:text-4xl lg:mb-8">Your Cart</Title>
                <Button 
                    variant="none" 
                    className="ml-auto hover:cursor-pointer lg:hidden"
                    onClick={toggleModal}
                    aria-label="View summary"
                >
                    View summary
                </Button>
                <section className="w-full grid grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-x-10">
                    <section className="w-full md:col-span-3 md:px-4 lg:col-span-2 flex flex-col items-center gap-10">
                        {Array
                            .from({ length: 9 }, (_, index) => `${index + 1}-${productId}`)
                            .map((_, index) => (
                                <CartItem
                                    key={index}
                                    {...product}
                                />
                        ))}
                    </section>
                    <Summary className="hidden lg:flex" />
                </section>
                <MobileSummary isOpen={isOpen} onClose={toggleModal} />
            </Container>
        </section>
    )
}