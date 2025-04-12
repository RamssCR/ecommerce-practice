import { useState, type ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { classMerger } from '@utils/classMerger'
import Button from '@components/ui/buttons/Button'
import Text from '@components/ui/texts/Text'

interface AccordionProps {
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

    return (
        <article className="w-full">
            <section 
                onClick={toggleAccordion} 
                className="w-full flex items-center justify-between py-1 hover:cursor-pointer"
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