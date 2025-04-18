import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useThemeProvider } from '@hooks/useThemeProvider';
import AppLink from '@components/ui/app-links/AppLink';
import Image from '@components/ui/images/Image';
import mockImage from '/mock-images/categories/headsets.avif';

export default function ProductImage() {
    const { theme } = useThemeProvider()

    return (
        <article className="w-full rounded-lg relative">
            <AppLink to="/products/wireless-headsets">
                <Image 
                    src={mockImage} 
                    alt="Headsets" 
                    className="w-full aspect-square object-contain transition-transform duration-300 group-hover:scale-105" 
                />
            </AppLink>
            <button className="absolute top-1 right-1">
                <FontAwesomeIcon 
                    icon={faBookmark} 
                    className={`
                        text-xl hover:cursor-pointer hover:text-primary transition-colors duration-200
                        ${theme === 'dark' ? 'text-slate-300' : 'text-slate-400'}   
                    `}
                    aria-label="Add to favorites"
                />
            </button>
        </article>
    );
}