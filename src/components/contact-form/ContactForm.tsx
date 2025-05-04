import type { ContactMessage } from "@localTypes/contactTypes"
import type { PostResponse } from "@localTypes/apiResponseTypes"
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from "@tanstack/react-query"
import { sendMessage } from "@helpers/contactMessage"
import { formFields } from '@utils/contactFields'
import Button from '@components/ui/buttons/Button'
import FormPopup from './FormPopup'
import InputField from './InputField'
import Title from '@components/ui/texts/Title'
import Loader from "@components/ui/loaders/Loader"

export default function ContactForm() {
    const [modal, setModal] = useState(false)
    const { register, handleSubmit, reset } = useForm<ContactMessage>()

    const toggleModal = () => setModal((prev) => !prev)
    const { 
        mutateAsync: sendMessageAsync, 
        error,
        data,
        isPending
    } = useMutation({
        mutationFn: sendMessage,
        onSuccess: () => reset(),
    })

    return (
        <form
            onSubmit={handleSubmit(async (data) => await sendMessageAsync(data))}
            className="w-full flex flex-col gap-4 items-center">
            <Title as="h2" className="text-2xl lg:text-3xl font-semibold">
                Contact Us
            </Title>
            {formFields.map((field, index) => (
                <InputField
                    key={index}
                    type={field.type}
                    name={field.name}
                    id={field.name}
                    placeholder={field.placeholder}
                    register={register}
                />
            ))}
            <Button
                type="submit"
                variant="color-primary"
                className="w-full flex justify-center items-center py-3 mt-2"
                onClick={toggleModal}
            >
                {isPending
                    ? <Loader className="size-6" />
                    : "Send Message"
                }
            </Button>
            {error && !isPending && <FormPopup isOpen={modal} onClose={toggleModal} type="error" />}
            {(data as PostResponse) && !isPending && <FormPopup isOpen={modal} onClose={toggleModal} type="success" />}
        </form>
    )
}