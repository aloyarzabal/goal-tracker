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
}
