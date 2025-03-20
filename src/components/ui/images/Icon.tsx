import type { ImgHTMLAttributes } from 'react'
import { classMerger } from '@utils/classMerger'

/**
 * Component that renders an image with a size of an icon.
 * Use it to display images with icon sizes or in a 1:1 aspect ratio.
 * @example
 * <Icon
 *  src="https://icons.example.com/waving"
 *  alt="Waving icon"
 *  title="Send a wave to your friends"
 *  className="size-12 md:size-14"
 * />
 */
export default function Icon({ src, alt, title, className, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img 
            src={src} 
            alt={alt} 
            title={title}
            className={classMerger('size-8 lg:size-10', className)}
            {...props} 
        />
    )
}