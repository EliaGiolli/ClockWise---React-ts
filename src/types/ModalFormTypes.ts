import { type Table } from "@tanstack/react-table";
import { WorkLogEntry } from "./workLogTypes";

export type ModalFormProps = {
  isOpen?: boolean;
  closeModal: () => void;
  //react hook form expects an arrow function with a data property as argument
  onSubmit: (data: WorkLogEntry) => void;
  table: Table<WorkLogEntry>;
};
