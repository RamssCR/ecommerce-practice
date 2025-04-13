import type { HTMLAttributes } from 'react'
import { classMerger } from '@utils/classMerger'

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

/**
 * Component that renders a heading title element.
 * @example
 * // Basic Usage: Render with default props
 * <Title>Random Title</Title> // This is an h1 element
 * 
 * @example
 * // Basic Usage: Render with custom props
 * <Title as="h2" className="text-xl">A random but somewhat smaller title</Title> // This is now an h2 element
 */
export default function Title({ as: Tag = "h1", children, className, ...props }: HeadingProps) {
    return (
        <Tag
            className={classMerger('text-neutral-text-highlight font-bold text-3xl', className)}
            {...props}
        >
            {children}
        </Tag>
    )
}