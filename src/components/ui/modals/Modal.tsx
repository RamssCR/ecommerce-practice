import { useEffect, useState, type HTMLAttributes, } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { classMerger } from '@utils/classMerger'

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  onClose: () => void
  position?: "right" | "center"
}

export default function Modal({ 
  isOpen = false, 
  onClose, 
  children, 
  position = "center",
  className = ""
}: ModalProps) {
  const [isVisible, setIsVisible] = useState(isOpen)

  useEffect(() => {
    if (isOpen) setIsVisible(true)
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [onClose])

  if (typeof window === "undefined" || !isVisible) return null

  return createPortal(
    <AnimatePresence
      mode="wait"
      onExitComplete={() => setIsVisible(false)}
    >
      {isOpen && (
        <motion.div
          key="modal-backdrop"
          className={classMerger(
            'fixed inset-0 z-50 flex h-screen items-center justify-center bg-black/40',
            className
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            key="modal-content"
            className={`
              bg-neutral-background-highlight shadow-xl h-screen w-full md:max-w-md p-6
              ${position === "right" ? "ml-auto h-screen md:rounded-l-lg overflow-auto" : "rounded-xl"}
            `}
            initial={{
              opacity: 0,
              y: position === "center" ? 50 : 0,
              x: position === "right" ? 100 : 0,
              scale: position === "center" ? 0.95 : 1
            }}
            animate={{
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1
            }}
            exit={{
              opacity: 0,
              y: position === "center" ? 50 : 0,
              x: position === "right" ? 100 : 0,
              scale: position === "center" ? 0.95 : 1
            }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
