import { Modal } from "./Modal";
import { ExpenseForm } from "./ExpenseForm";

interface Props {
  onClose: () => void;
}

export function NewExpenseModal({ onClose }: Props) {
  return (
    <Modal>
      <ExpenseForm onClose={onClose} />
    </Modal>
  );
}
