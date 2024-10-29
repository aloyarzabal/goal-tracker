import { useMemo, useState } from "react";
import { ExpensesEntriesList } from "./ExpensesEntriesList";
import { ExpensesSummary } from "./ExpensesSummary";
import { NewExpenseModal } from "./NewExpenseModal";
import { useExpenses } from "../hooks/useExpenses";
import Heading from "../../../components/Heading";
import ExpensesFilters from "./ExpensesFilters";
import { months, todaysMonthName } from "../../../utils/formatDate";
import Button from "../../../components/Button";
import { Spinner } from "../../../components/Spinner";
import { sortBy } from "../types/expense";

export function SummaryExpensesTab() {
  const [showForm, setShowForm] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(todaysMonthName());
  const { expenses: unsortedExpenses, isLoading } = useExpenses(selectedMonth);
  const [filter, setFilter] = useState(sortBy.DATEASC);

  const expenses = useMemo(() => {
    if (filter === sortBy.AMOUNTDESC) {
      unsortedExpenses?.sort((a, b) => b.amount - a.amount);
    }
    if (filter === sortBy.AMOUNTASC) {
      unsortedExpenses?.sort((a, b) => a.amount - b.amount);
    }
    if (filter === sortBy.DATEASC) {
      unsortedExpenses?.sort((a, b) => {
        if (a.createdAt < b.createdAt) {
          return -1;
        }
        return 1;
      });
    }
    if (filter === sortBy.DATEDESC) {
      unsortedExpenses?.sort((a, b) => {
        if (a.createdAt > b.createdAt) {
          return -1;
        }
        return 1;
      });
    }
    if (filter === sortBy.RECURRENT) {
      unsortedExpenses?.sort((a, b) => {
        if (a.recurrent === false && b.recurrent === true) {
          return -1;
        }
        return 1;
      });
    }
    return unsortedExpenses;
  }, [filter, unsortedExpenses]);

  const handleSort = (sortBy: sortBy) => {
    setFilter(sortBy);
  };

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
      <ExpensesEntriesList expenses={expenses} handleSort={handleSort} />
      {showForm && <NewExpenseModal onClose={closeModal} />}
      <Button onClick={showModal}> + Add Expense</Button>
    </>
  );
}
