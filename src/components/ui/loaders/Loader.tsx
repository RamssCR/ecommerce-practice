import { variants, type LoaderVariant } from '@styles/variants/loaderVariants'
import { classMerger } from "@utils/classMerger"

type LoaderProps = {
    className?: string
    variant?: LoaderVariant
}

export default function Loader({ className, variant = 'white' }: LoaderProps) {
    return (
        <div 
            className={classMerger(
                'size-16 rounded-full animate-spin border-3',
                variants[variant],
                'border-t-transparent',
                className
            )}
        />
    )
}