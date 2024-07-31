import { useState } from "react";
import { ExpensesEntriesList } from "./ExpensesEntriesList";
import { ExpensesSummary } from "./ExpensesSummary";
import { NewExpenseModal } from "./NewExpenseModal";
import { getExpenses } from "../../../api/apiExpenses";
import { useQuery } from "@tanstack/react-query";
import { Button } from "../../../components/Button";

export function SummaryExpensesTab() {
  const [showForm, setShowForm] = useState(false);
  // const [expenses, setExpenses] = useState<expense[]>([]);

  const { data: expenses, status } = useQuery({
    queryKey: ["expenses"],
    queryFn: getExpenses,
  });

  const showModal = () => {
    setShowForm(true);
  };

  const closeModal = () => {
    setShowForm(false);
  };

  if (status !== "success") return;

  return (
    <>
      <ExpensesSummary expenses={expenses} />
      <ExpensesEntriesList expenses={expenses} />
      {showForm && <NewExpenseModal onClose={closeModal} />}
      <Button onClick={showModal}> + Add Expense</Button>
    </>
  );
}
