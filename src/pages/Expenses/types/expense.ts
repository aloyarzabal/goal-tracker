export type expenseToApi = Omit<expenseApiView, "id">;

export enum ExpenseCategory {
  HOUSE = "house",
  FOOD = "food",
  SALARY = "salary",
  PAYMENTS = "payments",
  DEFAULT = "default",
}

export interface expense {
  id: number;
  amount: number;
  concept: string;
  category: ExpenseCategory;
  createdAt: Date;
  recurrent: Boolean;
}

export function expenseFromJSON(expense: expenseApiView): expense {
  return {
    id: expense.id,
    amount: expense.amount,
    concept: expense.concept,
    category: expense.category,
    createdAt: expense.created_at,
    recurrent: expense.recurrent,
  };
}
export function expenseToJSONNoId(expense: expense): expenseToApi {
  const { amount, concept, category, createdAt, recurrent } = expense;
  return {
    amount,
    concept,
    category,
    created_at: createdAt,
    recurrent,
  };
}
export function expenseToJSON(expense: expense): expenseApiView {
  const { id, amount, concept, category, createdAt, recurrent } = expense;
  return {
    id,
    amount,
    concept,
    category,
    created_at: createdAt,
    recurrent,
  };
}

export interface expenseApiView {
  id: number;
  amount: number;
  concept: string;
  category: ExpenseCategory;
  created_at: Date;
  recurrent: Boolean;
}

export function mapExpenseFromApi(expenses: expenseApiView[]) {
  const formattedExpenses: expense[] = [];
  expenses.forEach((exp) => formattedExpenses.push(expenseFromJSON(exp)));

  return formattedExpenses;
}
