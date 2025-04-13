import { useForm } from 'react-hook-form'
import Textbox, { type TextboxProps } from "@components/ui/textboxes/Texbox"
import Label from "@components/ui/labels/Label"
import Button from '@components/ui/buttons/Button'
import Title from '@components/ui/texts/Title'

const InputField = ({ 
    type, 
    name, 
    placeholder = "",
    register
}: TextboxProps) => {
    const fieldName = name?.split('-').join(' ')
    const autoComplete = {
        name: "on",
        email: "email",
        phone: "tel",
        message: "on",
    }

    return (
        <article className="w-full space-y-2">
            <Label 
                htmlFor={name}
                className="flex items-center gap-1"
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
    const { register } = useForm()
    const formFields = [
        { name: "name", type: "text", placeholder: "Your Name" },
        { name: "email", type: "email", placeholder: "Your Email" },
        { name: "phone", type: "tel", placeholder: "Your Phone" },
        { name: "message", type: "text", placeholder: "Your Message" }
    ]

    return (
        <form className="w-full flex flex-col gap-4 items-center">
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
                variant="color-primary" 
                className="w-full py-3 mt-2"
            >
                Submit
            </Button>
        </form>
    )
}