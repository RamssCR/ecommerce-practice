import Brand from './Brand'
import Legal from './Legal'
import Newsletter from './Newsletter'
import Container from '@components/ui/containers/Container'
import Text from '@components/ui/texts/Text'

/**
 * Renders the app footer.
 * @example
 * <Footer />
 */
export default function Footer() {
    return (
        <footer className="w-full py-7 px-10 bg-neutral-background-highlight lg:py-12">
            <Container className="mx-auto flex flex-col items-start gap-10">
                {/* Brand and inner website links */}
                <Brand />
                {/* Text about MusioShore */}
                <Text className="text-[0.75rem] text-center text-neutral-text-highlight md:text-left md:pr-6 lg:pr-16 xl:pr-0 xl:w-3/4">
                    At MusioShore, we are dedicated to bringing music lovers closer to the sounds they cherish. Our mission is to provide high-quality audio products that enhance every listening experience, whether at home, on the go, or in the studio. We strive for excellence in design, durability, and performance, ensuring that every product delivers immersive sound.
                </Text>
                <Newsletter />
                {/* Copyright and developer information */}
                <Legal />
            </Container>
        </footer>
    )
}