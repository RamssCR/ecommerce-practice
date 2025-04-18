import Modal, { type ModalProps } from "@components/ui/modals/Modal"
import { faX, faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Text from "@components/ui/texts/Text"
import Title from "@components/ui/texts/Title"
import Button from "@components/ui/buttons/Button"

type FormPopupProps = Pick<ModalProps, "isOpen" | "onClose"> & {
    type: "success" | "error"
}

export default function FormPopup({ isOpen, onClose, type }: FormPopupProps) {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            position="center"
        >
            <section className="w-full flex flex-col items-center justify-center gap-3">
                <div className={`
                    size-20 border-4 rounded-full flex items-center justify-center
                    ${type === "success" ? "border-green-500" : "border-red-500"}
                `}>
                    <FontAwesomeIcon
                        icon={type === "error" ? faX : faCheck}
                        title="Error"
                        className={`
                            text-4xl
                            ${type === "success" ? "text-green-500" : "text-red-500"}
                        `}
                    />
                </div>
                <Title
                    as="h2"
                    className="text-2xl lg:text-3xl text-center font-medium"
                >
                    {type === "success" 
                        ? "Your message has been sent!" 
                        : "Oops, something went wrong!"
                    }
                </Title>
                <Text className="text-center text-sm opacity-75">
                    {type === "success"
                        ? "Thank you for reaching out to us. We will get back to you as soon as possible."
                        : "It seems some fields are missing or incorrect. Please check your input and try again."
                    }
                </Text>
                <Button
                    className="mt-4 w-full md:w-fit"
                    onClick={onClose}
                >
                    Close popup
                </Button>
            </section>
        </Modal>
    )
}