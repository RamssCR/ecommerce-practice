import { useState, type InputHTMLAttributes } from "react"
import { classMerger } from "@utils/classMerger"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import Text from "@components/ui/texts/Text"

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
    variant?: 'primary' | 'background' | 'none'
    title?: string
}

export default function Checkbox({ 
    variant = "background", 
    checked = false, 
    title,
    className, 
    ...props 
}: CheckboxProps) {
    const [isChecked, setIsChecked] = useState(checked)
    const toggleCheckbox = () => setIsChecked(prev => !prev)

    const variants = {
        primary: 'bg-primary text-white',
        background: 'bg-neutral-text-highlight text-neutral-background',
        none: 'bg-transparent'
    }

    const borders = {
        primary: 'border-primary',
        background: 'border-neutral-text',
        none: 'border-transparent'
    }

    return (
        <label className="flex items-center gap-3">
            <article
                className={classMerger(
                    'size-5 rounded-sm flex items-center justify-center border hover:cursor-pointer',
                    isChecked && variants[variant],
                    borders[variant],
                    className
                )}
            >
                <input 
                    type="checkbox"
                    className="hidden sr-only"
                    onChange={toggleCheckbox}
                    checked={isChecked}
                    {...props}
                />
                {isChecked && <FontAwesomeIcon
                    icon={faCheck}
                    className="text-sm"
                />}
            </article>
            {title && <Text className="capitalize">{title}</Text>}
        </label>
    )
}