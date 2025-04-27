import Button from "@components/ui/buttons/Button";
import Title from "@components/ui/texts/Title";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function QuantityPicker({ quantity = 1 }) {
    return (
        <section className="w-full flex justify-between items-center px-4 md:px-0 md:gap-6">
            {/* Remove quantity button */}
            <Button variant="none">
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    title="Remove quantity"
                    className="text-neutral-text-highlight font-bold text-xl hover:cursor-pointer"
                />
            </Button>
            <Title as="h4" className="text-3xl font-normal text-neutral-text-highlight">{quantity}</Title>
            {/* Add quantity button */}
            <Button variant="none">
                <FontAwesomeIcon
                    icon={faChevronRight}
                    title="Add quantity"
                    className="text-neutral-text-highlight font-bold text-xl hover:cursor-pointer"
                />
            </Button>
        </section>
    )
}