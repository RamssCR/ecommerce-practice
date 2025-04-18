import ContactInfo from "@components/contact-info/ContactInfo"
import Container from "@components/ui/containers/Container"

export default function Contact() {
    return (
        <section className="mt-24 w-full px-6 py-6 bg-neutral-background md:px-8 md:py-12">
            <Container className="mx-auto w-full flex flex-col items-center gap-8">
                <ContactInfo />
            </Container>
        </section>
    )
}