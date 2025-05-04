import type { FilterRecord } from '@localTypes/filtersTypes'
import Modal, { type ModalProps } from "@components/ui/modals/Modal"
import Button from '@components/ui/buttons/Button'
import Filters from './Filters'

type MobileFiltersProps = Pick<ModalProps, 'isOpen' | 'onClose'> & {
    filters: FilterRecord
    loading?: boolean
}

export default function MobileFilters({ isOpen, onClose, filters, loading }: MobileFiltersProps) {
    return (
        <Modal 
            isOpen={isOpen} 
            onClose={onClose} 
            position="right"
            className="lg:hidden"
        >
            <article className="flex flex-col items-start w-full justify-between h-full overflow-y-scroll">
                <Filters 
                    className="w-full flex mb-7"
                    filters={filters}
                    loading={loading}
                />
                <Button 
                    variant="primary" 
                    className="w-full mt-auto" 
                    onClick={onClose}
                >
                    See my selections
                </Button>
            </article>
        </Modal>
    )
}