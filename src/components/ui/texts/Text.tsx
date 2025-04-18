import type { HTMLAttributes } from 'react'
import { classMerger } from '@utils/classMerger'

/**
 * Component that renders a customizable paragraph element.
 * @example
 * // Basic Usage: No custom className is passed
 * <Text>This is a random text block</Text>
 * 
 * @example
 * // Basic Usage: Custom className is passed
 * <Text className="hover:text-teal-500">
 *    This is a random text block with a custom className
 * </Text>
 */
export default function Text({ children, className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p 
            className={classMerger('text-neutral-text', className)}
            {...props}
        >
            {children}
        </p>
    )
}