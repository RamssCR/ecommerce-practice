import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import Button from "@components/ui/buttons/Button"
import Tooltip from '@components/ui/tooltips/Tooltip'
import QuantityPicker from '@components/quantity-picker/QuantityPicker'
import { classMerger } from '@utils/classMerger'

type CartItemActionsProps = {
    className?: string
}

export default function CartItemActions({ className }: CartItemActionsProps) {
    return (
        <section className={classMerger(
            'w-full flex items-center gap-3 md:w-fit md:gap-6',
            className
        )}>
            <QuantityPicker />
            <Button
                variant="none"
                className="w-15 h-12 relative flex items-center group justify-center rounded-full bg-neutral-background-highlight hover:bg-primary-light md:w-20 transition-all duration-200"
            >
                <FontAwesomeIcon
                    icon={faBookmark}
                    className="text-slate-400 group-hover:text-primary transition-all duration-200"
                />
                <Tooltip variant="light" className="-top-9 -left-[0.5em]">
                    Add to Wishlist
                </Tooltip>
            </Button>
        </section>
    )
}