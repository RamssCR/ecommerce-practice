import type { ImgHTMLAttributes } from 'react'
import { classMerger } from '@utils/classMerger'

/**
 * Component that renders an customizable image.
 * Use it to display images with standard aspect ratios (16:9 and 3:4).
 * @example
 * <Image
 *  src="https://example.com/image.jpg"
 *  alt="Image description"
 *  className="size-40 border-2 border-orange-400 rounded-lg"
 * />
 */
export default function Image({ src, alt, className, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img 
            src={src} 
            alt={alt} 
            className={classMerger(className)}
            {...props} 
        />
    )
}