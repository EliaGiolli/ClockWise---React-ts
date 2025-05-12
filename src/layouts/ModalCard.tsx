//External Libraries
import { Dialog, DialogPanel } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";


import { ModalFormProps } from "../types/ModalFormTypes";

function ModalCard ({ isOpen, closeModal }: ModalFormProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog as="div" className="relative z-10" onClose={closeModal} open={isOpen}>
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full max-w-md rounded bg-white p-6 shadow-lg"
            >
              <DialogPanel>
                <h1 className="text-lg font-bold">Il tuo form</h1>
                <form>
                  {/* ...form fields... */}
                </form>
              </DialogPanel>
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default ModalCard
