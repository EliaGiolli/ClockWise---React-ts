import { type Table } from "@tanstack/react-table";
import { WorkLogEntry } from "./workLogTypes";

export type ModalFormProps = {
  isOpen?: boolean;
  closeModal: () => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  table: Table<WorkLogEntry>
};