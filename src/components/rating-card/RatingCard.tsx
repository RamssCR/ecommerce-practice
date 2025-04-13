import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { useThemeProvider } from '@hooks/useThemeProvider'
import { classMerger } from '@utils/classMerger'

type RatingCardProps = {
    rating: number
    size?: 'small' | 'medium' | 'large'
}

export default function RatingCard({ rating, size = "medium" }: RatingCardProps) {
    const { theme } = useThemeProvider()

    const fullStars = Math.floor(rating)
    const halfStars = rating % 1 >= 0.5 ? 1 : 0
    const emptyStars = 5 - fullStars - halfStars

    const sizeClasses = {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg'
    }

    return (
        <div className="flex items-center gap-1">
            {Array(fullStars).fill(0).map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className={classMerger('text-primary', sizeClasses[size])} />
            ))}
            {Array(halfStars).fill(0).map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStarHalf} className={classMerger('text-primary', sizeClasses[size])} />
            ))}
            {Array(emptyStars).fill(0).map((_, index) => (
                <FontAwesomeIcon 
                    key={index} 
                    icon={faStar} 
                    className={classMerger(
                        'text-neutral-background-highlight',
                        sizeClasses[size],
                        theme === 'dark' ? 'brightness-50' : 'brightness-90'
                    )} />
            ))}
        </div>
    )
}