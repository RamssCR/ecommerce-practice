import type { LabelHTMLAttributes } from "react"
import { classMerger } from "@utils/classMerger"

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
    required?: boolean
}

export default function Label({ 
    htmlFor, 
    children, 
    className,
    required = true 
}: LabelProps) {
    return (
        <label 
            htmlFor={htmlFor}
            className={classMerger(
                'text-sm font-semibold text-neutral-text-highlight/80',
                className
            )}
        >
            {children}
            {required && <span className="text-red-500">*</span>}
        </label>
    )
}