import type { ButtonHTMLAttributes } from 'react'
import { buttonVariants, type ButtonVariant } from '@styles/variants/buttonVariants'
import { classMerger } from '@utils/classMerger'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant
}

/**
 * Component that renders a customizable button element.
 * @example
 * <Button
 *  variant="outline"
 *  onClick={() => console.log('Button clicked')}
 * >
 *  Click me!
 * </Button>
 */
export default function Button({ 
    children, 
    disabled = false,
    variant = "primary", 
    type = 'button',
    className, 
    ...props 
}: ButtonProps) {
    return (
        <button
            type={type}
            className={classMerger(
                'hover:cursor-pointer focus:outline-none',
                variant !== 'none' ? 'py-3 px-5 rounded-md border border-transparent transition-colors duration-200' : '',
                buttonVariants[variant],
                disabled ? `${buttonVariants.ghost} cursor-not-allowed` : '',
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}