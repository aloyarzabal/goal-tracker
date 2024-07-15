import { useState } from "react";
import { AddExpenseButton } from "./AddExpenseButton";
import { ExpensesEntriesList } from "./ExpensesEntriesList";
import { ExpensesSummary } from "./ExpensesSummary";
import { NewExpenseModal } from "./NewExpenseModal";
import { ExpenseCategory, expense } from "../types/expense";

const DUMB_EXP: expense[] = [
  {
    id: 0,
    amount: 34,
    concept: "Gastos",
    category: ExpenseCategory.PAYMENTS,
  },
  {
    id: 1,
    amount: 2900,
    concept: "Pago alquiler",
    category: ExpenseCategory.HOUSE,
  },
  {
    id: 2,
    amount: 940,
    concept: "Gastos",
    category: ExpenseCategory.PAYMENTS,
  },
  {
    id: 3,
    amount: 6000,
    concept: "Salario marzo",
    category: ExpenseCategory.SALARY,
  },
  {
    id: 4,
    amount: 61,
    concept: "Mercadona",
    category: ExpenseCategory.FOOD,
  },
  {
    id: 5,
    amount: 134.6,
    concept: "Soborno al carpintero que me ha hecho las puertas en B",
    category: ExpenseCategory.PAYMENTS,
  },
  {
    id: 6,
    amount: 1500,
    concept: "Reforma",
    category: ExpenseCategory.SALARY,
  },
];

export function SummaryExpensesTab() {
  const [showForm, setShowForm] = useState(false);
  const [expenses, setExpenses] = useState(DUMB_EXP);

  const showModal = () => {
    setShowForm(true);
  };

  const closeModal = () => {
    setShowForm(false);
  };

  const handleAddNewExpense = (newExpense: expense) => {
    setExpenses([...expenses, { ...newExpense, id: expenses.length }]);
    setShowForm(false);
  };

  const handleDeleteExpense = (idToDelete: number) => {
    const newExpenses = expenses.filter((exp) => exp.id !== idToDelete);
    setExpenses(newExpenses);
  };

  return (
    <>
      <ExpensesSummary expenses={expenses} />
      <ExpensesEntriesList expenses={expenses} onDelete={handleDeleteExpense} />
      {showForm && (
        <NewExpenseModal onAdd={handleAddNewExpense} onClose={closeModal} />
      )}
      <AddExpenseButton onClick={showModal} />
    </>
  );
}
