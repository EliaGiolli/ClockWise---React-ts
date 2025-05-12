import { Dialog, DialogPanel } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from 'react-hook-form'
import { useThemeStore } from "../store/store";
import { ModalFormProps } from "../types/ModalFormTypes";
import { WorkLogEntry } from "../types/workLogTypes";

function ModalCard({ isOpen, closeModal, onSubmit }: ModalFormProps) {
  const initialTheme = useThemeStore(state => state.initialTheme);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<WorkLogEntry>();

  const handleFormSubmit = (data: WorkLogEntry) => {
    onSubmit(data);  // pass the data to parent
    reset();         // reset the form
    closeModal();    // close modal
  };

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
              className={`${initialTheme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-900 text-gray-200'} w-full max-w-md rounded p-6 shadow-lg`}
            >
              <DialogPanel>
                <h1 className={`${initialTheme === 'light' ? 'text-blue-900' : 'text-blue-500'} text-lg font-bold`}>Aggiungi Presenza</h1>
                <form className="space-y-4" onSubmit={handleSubmit(handleFormSubmit)}>
                  <div>
                    <label>Data</label>
                    <input
                      type="date"
                      className="w-full border rounded px-2 py-1"
                      {...register("date", { required: "Campo obbligatorio" })}
                    />
                    {errors.date && <p className="text-red-500">{errors.date.message}</p>}
                  </div>

                  <div>
                    <label>Ore lavorate</label>
                    <input
                      type="number"
                      step="0.25"
                      className="w-full border rounded px-2 py-1"
                      {...register("hours", {
                        required: "Campo obbligatorio",
                        min: { value: 0.25, message: "Minimo 0.25 ore" },
                        max: { value: 24, message: "Massimo 24 ore" }
                      })}
                    />
                    {errors.hours && <p className="text-red-500">{errors.hours.message}</p>}
                  </div>

                  <div>
                    <label>Attività</label>
                    <input
                      type="text"
                      className="w-full border rounded px-2 py-1"
                      {...register("activity", {
                        required: "Campo obbligatorio",
                        minLength: { value: 2, message: "Almeno 2 caratteri" },
                        maxLength: { value: 50, message: "Massimo 50 caratteri" }
                      })}
                    />
                    {errors.activity && <p className="text-red-500">{errors.activity.message}</p>}
                  </div>

                  <div className="flex justify-end gap-2">
                    <button type="button" onClick={closeModal} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">
                      Annulla
                    </button>
                    <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700" disabled={isSubmitting}>
                      Salva
                    </button>
                  </div>
                </form>
              </DialogPanel>
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}

export default ModalCard;
