import { useState } from "react";
import { ExpensesEntriesList } from "./ExpensesEntriesList";
import { ExpensesSummary } from "./ExpensesSummary";
import { NewExpenseModal } from "./NewExpenseModal";
import { useExpenses } from "../hooks/useExpenses";
import Heading from "../../../components/Heading";
import ExpensesFilters from "./ExpensesFilters";
import { months, todaysMonthName } from "../../../utils/formatDate";
import Button from "../../../components/Button";
import { Spinner } from "../../../components/Spinner";

export function SummaryExpensesTab() {
  const [showForm, setShowForm] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(todaysMonthName());
  const { expenses, isLoading } = useExpenses(selectedMonth);

  const showModal = () => {
    setShowForm(true);
  };

  const closeModal = () => {
    setShowForm(false);
  };

  const handleMonthSelect = (value: months) => {
    setSelectedMonth(value);
  };

  if (isLoading || !expenses) return <Spinner />;

  return (
    <>
      <Heading as="h2" $center>
        {selectedMonth}'s summary
      </Heading>
      <ExpensesSummary expenses={expenses} />
      <ExpensesFilters
        defaultValue={selectedMonth}
        onSelect={handleMonthSelect}
      />
      <ExpensesEntriesList expenses={expenses} />
      {showForm && <NewExpenseModal onClose={closeModal} />}
      <Button onClick={showModal}> + Add Expense</Button>
    </>
  );
}
