import ContactForm from "@components/contact-form/ContactForm"
import GeneralInfo from "./GeneralInfo"

export default function ContactInfo() {
    return (
        <article className="w-full grid grid-cols-1 place-items-center gap-y-12 md:grid-cols-2 md:gap-x-12 md:gap-y-0">
            <GeneralInfo /> 
            <ContactForm />           
        </article>
    )
}