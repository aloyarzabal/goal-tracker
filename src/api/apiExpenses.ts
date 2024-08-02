import { expenseApiView, expense } from "../pages/Expenses/types/expense";
import { supabase } from "./supabase";

export async function getExpenses(): Promise<expenseApiView[]> {
  const { data, error } = await supabase.from("expenses").select();

  if (error) {
    console.error(error);
    throw new Error("Expenses could not be loaded");
  }

  return data;
}

export async function deleteExpense(id: number) {
  const { error } = await supabase.from("expenses").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Expense could not be deleted");
  }
}

export async function addExpense(expense: expense) {
  const { category, concept, amount } = expense;
  const { data, error } = await supabase
    .from("expenses")
    .insert([{ category: category, concept: concept, amount: amount }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Expense could not be added");
  }

  return data;
}
