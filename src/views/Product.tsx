import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import Container from "@components/ui/containers/Container"
import Breadcrumb from "@components/ui/breadcrumbs/Breadcrumb"
import Image from '@components/ui/images/Image'
import headsetImage from '/mock-images/categories/headsets.avif'
import Text from '@components/ui/texts/Text'
import Title from '@components/ui/texts/Title'
import RatingCard from '@components/rating-card/RatingCard'
import QuantityPicker from '@components/quantity-picker/QuantityPicker'
import Button from '@components/ui/buttons/Button'
import Tooltip from '@components/ui/tooltips/Tooltip'
import { useThemeProvider } from '@hooks/useThemeProvider'

type Path = {
    name: string
    slug: string
}

export default function Product() {
    const { pathname } = useLocation()
    const { theme } = useThemeProvider()

    const splittedPaths = pathname.split('/').filter((path) => path !== '')
    const [path] = useState<Path[]>(() => (
        splittedPaths.map((path, index) => ({
            name: path.split('-').join(' '),
            slug: splittedPaths.slice(0, index + 1).join('/')
        }))
    ))

    return (
        <section className="mt-24 w-full px-6 py-6 bg-neutral-background md:px-8">
            <Container className="mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10 lg:grid-cols-5 lg:gap-x-16">
                <section className="flex flex-col gap-5 lg:col-span-2">
                    <Breadcrumb links={path} />
                    <article 
                        className={`
                            w-full rounded-lg shadow-lg p-6
                            ${theme === "dark" ? "bg-neutral-background-highlight" : "bg-white"}
                        `}
                    >
                        <Image
                            src={headsetImage}
                            alt="Product Image"
                            className="w-full h-auto"
                        />
                    </article>
                </section>
                <section className="flex flex-col gap-5 md:mt-9 lg:col-span-3">
                    <section className="flex flex-col items-start gap-2 pb-6 border-b border-slate-400/65">
                        <Text className="text-primary text-sm lg:text-base">Headsets</Text>
                        <Title 
                            as="h2"
                            className="font-semibold text-2xl lg:text-3xl xl:text-4xl"
                        >
                            Headsets Lumisound Pulse Pro X9000 - Smart LED Speaker
                        </Title>
                        <section className="flex items-center gap-4 mt-2">
                            <Title as="h4" className="font-light text-2xl text-slate-400">$1,299.99</Title>
                            <Title as="h3" className="font-medium text-primary">$999.00</Title>
                        </section>
                        <Title as="h4" className="text-2xl font-medium mt-3">Description</Title>
                        <Text className="text-sm">
                            The Headsets Lumisound Pulse Pro X9000 is a state-of-the-art smart LED speaker that 
                            combines cutting-edge audio technology with stunning visual effects. With its sleek 
                            design and powerful sound, this speaker is perfect for music lovers and audiophiles 
                            alike. The Pulse Pro X9000 features customizable LED lights that sync with your music, 
                            creating an immersive experience that will elevate any party or gathering. Whether you're 
                            listening to your favorite tunes or watching a movie, the Lumisound Pulse Pro X9000 delivers 
                            crystal-clear sound and vibrant visuals that will leave you in awe.
                        </Text>
                        <section className="flex items-center gap-3 mt-4">
                            <RatingCard rating={4} size="large" />
                            <Text className="text-sm text-slate-400">(12 Reviews)</Text>
                        </section>
                    </section>
                    <section className="grid grid-cols-1 px-2 gap-y-5 md:gap-x-5 lg:grid-cols-3 lg:gap-x-10">
                        <QuantityPicker />
                        <article className="w-full flex items-center gap-3 col-span-2">
                            <Button 
                                className="w-full py-3 duration-200 transition-all hover:brightness-110" 
                                variant="color-primary"
                            >
                                Add to Cart
                            </Button>
                            <Button 
                                variant="none"
                                className="w-16 h-12 relative flex items-center group justify-center rounded-full bg-neutral-background-highlight hover:bg-primary-light xl:w-14 transition-all duration-200"
                            >
                                <FontAwesomeIcon
                                    icon={faBookmark}
                                    className="text-slate-400 group-hover:text-primary transition-all duration-200"
                                />
                                <Tooltip variant="light" className="-top-9 -left-[0.5em]">
                                    Add to Wishlist
                                </Tooltip>
                            </Button>
                        </article>
                    </section>
                </section>
            </Container>
        </section>
    )
}