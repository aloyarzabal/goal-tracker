import { useState } from "react";
import { ExpensesEntriesList } from "./ExpensesEntriesList";
import { ExpensesSummary } from "./ExpensesSummary";
import { NewExpenseModal } from "./NewExpenseModal";
import { useMonthExpenses } from "../hooks/useMonthExpenses";
import Heading from "../../../components/Heading";
import ExpensesFilters from "./ExpensesFilters";
import Button from "../../../components/Button";
import { Spinner } from "../../../components/Spinner";

export function SummaryExpensesTab() {
  const [showForm, setShowForm] = useState(false);
  const { expenses, isLoading } = useMonthExpenses();

  const showModal = () => {
    setShowForm(true);
  };

  const closeModal = () => {
    setShowForm(false);
  };

  if (isLoading || !expenses) return <Spinner />;

  return (
    <>
      <Heading as="h2" $center>
        Dashboard
      </Heading>
      <ExpensesSummary expenses={expenses} />
      <ExpensesFilters />
      <ExpensesEntriesList expenses={expenses} />
      {showForm && <NewExpenseModal onClose={closeModal} />}
      <Button onClick={showModal}> + Add Expense</Button>
    </>
  );
}
