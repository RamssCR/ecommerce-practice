export const buttonVariants = {
    primary: 'bg-neutral-text text-neutral-background',
    "color-primary": 'bg-primary text-white',
    "color-primary-light": 'bg-primary-light text-primary-dark',
    "color-primary-dark": 'bg-primary-dark text-primary-light',
    outline: 'bg-transparent text-neutral-text border-neutral-text',
    ghost: 'bg-neutral-background-highlight text-neutral-background',
    none: ''
}

export type ButtonVariant = keyof typeof buttonVariants