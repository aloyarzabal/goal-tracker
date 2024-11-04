import { expenseApiView, expenseToApi } from "../pages/Expenses/types/expense";
import { supabase } from "./supabase";

export async function getExpensesByMonth(
  month: number
): Promise<expenseApiView[]> {
  const startingDate = new Date(`2024-${month}-01`).toISOString();
  const finishingDate = new Date(`2024-${month + 1}-01`).toISOString();

  const query = supabase
    .from("expenses")
    .select()
    .gte("created_at", startingDate)
    .lt("created_at", finishingDate);
  const { data, error } = await query;

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

export async function addExpense(expense: expenseToApi) {
  const { data, error } = await supabase
    .from("expenses")
    .insert([expense])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Expense could not be added");
  }

  return data;
}

export async function updateExpense(newExpense: expenseApiView) {
  const { data, error } = await supabase
    .from("expenses")
    .update(newExpense)
    .eq("id", newExpense.id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Expense could not be updated");
  }

  return data;
}
