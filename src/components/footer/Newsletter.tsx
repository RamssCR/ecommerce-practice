import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCheck, faX } from '@fortawesome/free-solid-svg-icons'
import Button from '@components/ui/buttons/Button'
import Input from '@components/ui/textboxes/Input'
import Title from '@components/ui/texts/Title'

const Message = ({ message, status }: { message?: string, status: 'error' | 'success' }) => {
    return (
        <div className="-mt-2 flex items-center gap-3">
            {status === 'error' ? (
                <FontAwesomeIcon icon={faX} className="text-red-500 text-lg" />
            ) : (
                <FontAwesomeIcon icon={faCheck} className="text-green-500 text-lg" />
            )}
            <p className={`text-${status === 'error' ? 'red' : 'green'}-500 text-[0.95rem]`}>
                {message ?? 'Your email has been registered successfully!'}
            </p>
        </div>
    )
}

export default function Newsletter() {
    return (
        <section className="w-full flex flex-col items-center text-center gap-4 md:text-left md:items-start">
            <Title as="h4" className="font-semibold">Subscribe to our Newsletter!</Title>
            <article className="flex flex-col gap-4 items-center w-full md:flex-row md:gap-0 lg:w-1/2">
                <Input 
                    icon={faEnvelope} 
                    variant="half-rounded" 
                    placeholder="Enter your email address"
                />
                <Button 
                    variant="color-primary" 
                    className="w-full uppercase rounded-lg md:rounded-l-none md:rounded-r-lg text-[0.93em] py-4 hover:cursor-pointer md:w-fit"
                >
                    Subscribe
                </Button>
            </article>
            {/* <Message status="success" /> */}
        </section>
    )
}