import { 
    useState, 
    type KeyboardEventHandler, 
    type ReactNode 
} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { classMerger } from '@utils/classMerger'
import Button from '@components/ui/buttons/Button'
import Text from '@components/ui/texts/Text'

type AccordionProps = {
    children: ReactNode
    title: string
    counter?: number
    className?: string
}

export default function Accordion({ 
    children, 
    title, 
    counter = 0, 
    className 
}: AccordionProps) {
    const [isOpen, setIsOpen] = useState(true)
    const toggleAccordion = () => setIsOpen(prev => !prev)
    const handleKeyUp: KeyboardEventHandler<HTMLElement> = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            toggleAccordion()
        }
    }

    return (
        <article className="w-full">
            <section 
                onClick={toggleAccordion} 
                onKeyUp={handleKeyUp}
                role="button"
                tabIndex={0}
                className="w-full flex items-center justify-between py-1 hover:cursor-pointer outline-none focus:outline-none"
            >
                <article className="flex items-center gap-2">
                    <Text className="lg:text-lg">{title}</Text>
                    {counter > 0 && <Text className="text-slate-400 text-sm">({counter})</Text>}
                </article>
                <Button variant="none">
                    <FontAwesomeIcon
                        icon={isOpen ? faChevronUp : faChevronDown}
                        className="text-neutral-text hover:cursor-pointer md:text-lg"
                    />
                </Button>
            </section>
            {isOpen && (
                <section className={classMerger('my-1 w-full flex flex-col items-start', className)}>
                    {children}
                </section>
            )}
        </article>
    )
}