import { FontAwesomeIcon, type FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { classMerger } from "@utils/classMerger";
import type { InputHTMLAttributes } from "react";
import Textbox from "./Texbox";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    icon?: FontAwesomeIconProps['icon']
    variant?: 'full-rounded' | 'half-full-rounded' | 'half-rounded' | 'rounded' | 'square' | 'full-square'
}

export default function Input({ icon, placeholder = "Text something here...", variant = "rounded" }: InputProps) {
    const variants = {
        "full-rounded": "md:rounded-full",
        "full-square": "md:rounded-full",
        "half-full-rounded": "md:rounded-l-full md:rounded-r-none",
        "half-rounded": "md:rounded-l-lg md:rounded-r-none",
        "rounded": "md:rounded-lg",
        "square": "md:rounded-none",
    }

    return (
        <article className={classMerger(
            'w-full bg-neutral-background-highlight rounded-lg brightness-125 flex items-start justify-between px-5 py-2',
            variants[variant],
        )}>
            <section className="w-full flex items-center gap-3">
                {icon && (
                    <FontAwesomeIcon
                        icon={icon}
                        className="text-neutral-text-highlight"
                    />
                )}
                <Textbox placeholder={placeholder} name="newsletter" className="w-full" />
            </section>
        </article>
    )
}