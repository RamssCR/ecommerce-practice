import Button from '@components/ui/buttons/Button'
import Filters from './Filters'
import Modal, { type ModalProps } from "@components/ui/modals/Modal"

export default function MobileFilters({ isOpen, onClose }: Pick<ModalProps, 'isOpen' | 'onClose'>) {
    return (
        <Modal 
            isOpen={isOpen} 
            onClose={onClose} 
            position="right"
            className="lg:hidden"
        >
            <article className="flex flex-col items-start w-full justify-between h-full overflow-y-scroll">
                <Filters className="w-full flex mb-7" />
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