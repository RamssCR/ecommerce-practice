import Accordion from "@components/ui/accordions/Accordion"
import Checkbox from "@components/ui/checkboxes/Checkbox"
import Title from "@components/ui/texts/Title"

export default function Filters({ className }: { className?: string }) {
    return (
        <section className={`flex-col items-start gap-2 ${className}`}>
            <Title as="h3" className="font-medium text-2xl px-2">Filters</Title>
            <div className="border-b border-b-slate-300 w-full mb-3"></div>
            <Accordion title="Product Type" className="gap-2">
                <Checkbox title="In Stock" name="filter-selection" checked={false} />
                <Checkbox title="On Sale" name="filter-selection" checked={false} />
                <Checkbox title="Free Shipping" name="filter-selection" checked={false} />
                <Checkbox title="Fast Delivery" name="filter-selection" checked={false} />
                <Checkbox title="Gift Wrapping" name="filter-selection" checked={false} />
                <Checkbox title="Gift Message" name="filter-selection" checked={false} />
                <Checkbox title="Gift Card" name="filter-selection" checked={false} />
            </Accordion>
            <Accordion title="Product Size" className="gap-2">
                <Checkbox title="Small" name="filter-selection" checked={false} />
                <Checkbox title="Medium" name="filter-selection" checked={false} />
                <Checkbox title="Large" name="filter-selection" checked={false} />
                <Checkbox title="Extra Large" name="filter-selection" checked={false} />
                <Checkbox title="XXL" name="filter-selection" checked={false} />
            </Accordion>
        </section>
    )
}