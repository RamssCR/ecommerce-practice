import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Textbox, { type TextboxProps } from "@components/ui/textboxes/Texbox"
import Label from "@components/ui/labels/Label"
import Button from '@components/ui/buttons/Button'
import Title from '@components/ui/texts/Title'
import FormPopup from './FormPopup'
import { formFields } from '@utils/contactFields'

const InputField = ({
    type,
    name,
    placeholder = "",
    register
}: TextboxProps) => {
    const fieldName = name?.split('-').join(' ')
    const autoComplete = {
        name: "off",
        email: "email",
        phone: "tel",
        message: "off",
    }

    return (
        <article className="w-full space-y-2">
            <Label
                htmlFor={name}
                className="flex items-center gap-1 capitalize"
            >
                {fieldName}
            </Label>
            <Textbox
                type={type}
                name={name}
                id={name}
                autoComplete={autoComplete[type as keyof typeof autoComplete]}
                placeholder={placeholder}
                variant="form"
                {...register ? register(name as string, { required: true }) : {}}
            />
        </article>
    )
}

export default function ContactForm() {
    const [modal, setModal] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()

    const toggleModal = () => setModal((prev) => !prev)
    const isExistingError = Object.keys(errors).length > 0

    return (
        <form
            onSubmit={handleSubmit((data) => console.log(data))}
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
                className="w-full py-3 mt-2"
                onClick={toggleModal}
            >
                Submit
            </Button>
            {isExistingError 
                ? <FormPopup isOpen={modal} onClose={toggleModal} type="error" />
                : <FormPopup isOpen={modal} onClose={toggleModal} type="success" />
            }
        </form>
    )
}