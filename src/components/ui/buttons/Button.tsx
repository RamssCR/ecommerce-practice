import type { ButtonHTMLAttributes } from 'react'
import { classMerger } from '@utils/classMerger'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'color-primary' | 'color-primary-light' | 'color-primary-dark' | 'none'
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
export default function Button({ children, variant = "primary", onClick, className, ...props }: ButtonProps) {
    const variants = {
        primary: 'bg-neutral-text text-neutral-background',
        "color-primary": 'bg-primary text-white',
        "color-primary-light": 'bg-primary-light text-primary-dark',
        "color-primary-dark": 'bg-primary-dark text-primary-light',
        outline: 'bg-transparent text-neutral-text border-neutral-text',
        none: ''
    }

    return (
        <button
            onClick={onClick}
            className={classMerger(
                variant !== 'none' && 'py-3 px-5 rounded-md border border-transparent',
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}