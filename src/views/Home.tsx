import Banners from '@components/banners/Banners'
import Container from '@components/ui/containers/Container'

export default function Home() {
    return (
        <section className="w-full px-4 py-6 bg-neutral-background md:px-8">
            <Container className="mx-auto flex flex-col gap-5">
                <Banners />
            </Container>
        </section>
    )
}