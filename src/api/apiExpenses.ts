import {
  expense,
  expenseApiView,
  expenseToApi,
} from "../pages/Expenses/types/expense";
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
