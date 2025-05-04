import type { UseFormRegister } from 'react-hook-form'
import type { ContactMessage } from "@localTypes/contactTypes"
import Textbox, { type TextboxProps } from "@components/ui/textboxes/Texbox"
import Label from "@components/ui/labels/Label"

type InputFieldProps = TextboxProps & {
    register: UseFormRegister<ContactMessage>
}

export default function InputField({ type, name, placeholder = "", register }: InputFieldProps) {
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
                id={name}
                autoComplete={autoComplete[type as keyof typeof autoComplete]}
                placeholder={placeholder}
                variant="form"
                {...register 
                    ? register(name as keyof typeof autoComplete, { required: false }) 
                    : {}
                }
            />
        </article>
    )
}