import type { ReactNode } from 'react'
import { classMerger } from '@utils/classMerger'
import Text from '@components/ui/texts/Text'
import { useThemeProvider } from '@hooks/useThemeProvider'

type TooltipProps = {
    className?: string
    children?: ReactNode
    variant?: 'background' | 'light' | 'dark'
}

export default function Tooltip({ children, className, variant = "background" }: TooltipProps) {
    const { theme } = useThemeProvider()
    
    const variants = {
        background: "border bg-neutral-background-highlight text-neutral-text-highlight after:border-t-neutral-background-highlight",
        light: "bg-primary-light text-primary after:border-t-primary-light",
        dark: "bg-primary-dark text-primary-light after:border-t-primary-dark"
    }

    return (
        <div className="relative inline-block">
            <Text 
                className={classMerger(
                    "absolute invisible group-hover:visible opacity-0 group-hover:opacity-100",
                    "transition-all duration-200 -translate-y-full -translate-x-1/2",
                    "min-w-24 px-2 py-1 text-xs rounded-lg",
                    "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2",
                    "after:top-full after:border-8 after:border-transparent",
                    "",
                    variants[variant],
                    theme === "dark" && variant === "background" ? "border-slate-600/40" : "",
                    theme === "light" && variant === "background" ? "border-slate-300" : "",
                    className,
                )}
            >
                {children}
            </Text>
        </div>
    )
}