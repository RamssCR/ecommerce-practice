import AppLink from "@components/ui/app-links/AppLink"
import Button from "@components/ui/buttons/Button"
import Label from "@components/ui/labels/Label"
import Modal, { type ModalProps } from "@components/ui/modals/Modal"
import Textbox from "@components/ui/textboxes/Texbox"
import Text from "@components/ui/texts/Text"
import Title from "@components/ui/texts/Title"

export default function MobileSummary({ isOpen, onClose }: Pick<ModalProps, 'isOpen' | 'onClose'>) {
    return (
        <Modal 
            isOpen={isOpen} 
            onClose={onClose} 
            position="right" 
            className="overflow-y-scroll"
        >
            <section className="w-full h-full flex flex-col items-center justify-between">
                <article className="w-full flex flex-col items-start gap-2">
                    <Title as="h2" className="w-full font-medium text-2xl pb-3 px-2 border-b border-b-slate-400/65">Purchase Summary</Title>
                    <Title as="h4" className="mt-4 text-xl font-medium text-center w-full">Have a voucher? Redeem it here!</Title>
                    <form className="w-full flex flex-col items-center gap-4">
                        <article className="w-full flex flex-col items-start gap-1">
                            <Label required={false}>Voucher</Label>
                            <Textbox 
                                variant="form"
                                placeholder="Enter voucher code"
                                className="border border-slate-400/65"
                                name="voucher"
                            />
                        </article>
                        <Button className="w-full py-2">Redeem</Button>
                    </form>
                </article>
                <article className="w-full flex flex-col items-center gap-2">
                    <article className="w-full flex flex-col items-center gap-2 mb-6">
                        <div className="w-full flex items-center justify-between px-2 py-2 border-b border-dashed border-b-slate-400/65">
                            <Text>Subtotal</Text>
                            <Text className="tabular-nums">$600.00</Text>
                        </div>
                        <div className="w-full flex items-center justify-between px-2 py-2 border-b border-dashed border-b-slate-400/65">
                            <Text>Taxes</Text>
                            <Text className="tabular-nums">$157.00</Text>
                        </div>
                        <div className="w-full flex items-center justify-between px-2 py-2 border-b border-dashed border-b-slate-400/65">
                            <Text>Voucher Discount</Text>
                            <Text className="tabular-nums">-$80.00</Text>
                        </div>
                        <div className="w-full flex items-center justify-between px-2 py-2 border-b border-dashed border-b-slate-400/65">
                            <Text>Total</Text>
                            <Text className="tabular-nums">$677.00</Text>
                        </div>
                    </article>
                    <AppLink 
                        to="/checkout" 
                        className="w-full bg-neutral-text text-center text-neutral-background-highlight rounded-md py-2"
                    >
                        Go to Checkout
                    </AppLink>
                    <Button onClick={onClose} className="w-full py-2">Close Modal</Button>
                </article>
            </section>
        </Modal>
    )
}