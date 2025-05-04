import type { InputHTMLAttributes } from "react";
import { classMerger } from "@utils/classMerger";

export type TextboxProps = InputHTMLAttributes<HTMLInputElement> & {
    variant?: 'appStyle' | 'form' | 'none'
}

export default function Textbox({ 
    type = "text", 
    className, 
    variant = 'appStyle', 
    ...props 
}: TextboxProps) {
    const variants = {
        appStyle: 'p-2 bg-transparent',
        form: 'py-3 px-4 bg-neutral-background-highlight placeholder:text-neutral-text-highlight/60',
        none: ''
    }

    return (
        <input
            type={type}
            className={classMerger(
                'w-full rounded-lg focus:outline-none',
                variants[variant],
                className
            )}
            {...props}
        />
    )
}