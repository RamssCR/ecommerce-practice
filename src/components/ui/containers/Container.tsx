import type { HTMLAttributes } from 'react'
import { classMerger } from '@utils/classMerger'

/**
 * Renders a container that limits width size 
 * depending on the device's breakpoints.
 * @example
 * <Container>
 *  <h1>Heading</h1>
 *  <section>...</section>
 * </Container>
 */
export default function Container({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={classMerger(
                'w-full max-w-[25.5em] sm:max-w-[27em] md:max-w-[45em] lg:max-w-[70em] xl:max-w-[77em] 2xl:max-w-[90em]',
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}