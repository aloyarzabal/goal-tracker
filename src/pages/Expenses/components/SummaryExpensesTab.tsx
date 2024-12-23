import { useState } from "react";
import { ExpensesTable } from "./ExpensesTable";
import { NewExpenseModal } from "./NewExpenseModal";
import { useMonthYearExpenses } from "../hooks/useMonthYearExpenses";
import Button from "../../../components/Button";
import { Spinner } from "../../../components/Spinner";
import { ExpensesDashboard } from "./ExpensesDashboard";
import styled from "styled-components";

export function SummaryExpensesTab() {
  const [showForm, setShowForm] = useState(false);
  const { expenses, isLoading } = useMonthYearExpenses();

  const showModal = () => {
    setShowForm(true);
  };

  const closeModal = () => {
    setShowForm(false);
  };

  if (isLoading || !expenses) return <Spinner />;

  return (
    <StyledPage>
      <ExpensesDashboard expenses={expenses} />
      <ExpensesTable expenses={expenses} />
      {showForm && <NewExpenseModal onClose={closeModal} />}
      <Button $position="right" onClick={showModal}>
        + Add Expense
      </Button>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;
