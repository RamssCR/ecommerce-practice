import type { FilterProps } from '@localTypes/filtersTypes'
import Accordion from "@components/ui/accordions/Accordion"
import Checkbox from "@components/ui/checkboxes/Checkbox"
import Loader from '@components/ui/loaders/Loader'
import Title from "@components/ui/texts/Title"

export default function Filters({ className, filters = {}, loading = false }: FilterProps) {
    const MappedFilters = Object.entries(filters).map(([key, value]) => {
        const title = key.charAt(0).toUpperCase() + key.slice(1).split('-').join(' ')

        return (
            <Accordion key={key} title={title} className="gap-2">
                {value.map(item => (
                    <Checkbox 
                        key={item.id} 
                        title={item.name} 
                        checked={item.checked} 
                    />
                ))}
            </Accordion>
        )
    })

    return (
        <section 
            className={`
                flex-col gap-2 ${className}
                ${loading ? 'items-center' : 'items-start'}
            `}>
            <Title as="h3" className="font-medium text-2xl px-2 w-full">Filters</Title>
            <div className="border-b border-b-slate-300 w-full mb-3"></div>
            {loading
                ? <Loader variant="background" className="mt-5" />
                : MappedFilters
            }
        </section>
    )
}