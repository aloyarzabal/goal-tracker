import { expenseCategories } from "../pages/Expenses/types/categories";
import { supabase } from "./supabase";

export async function getExpenseCategories(): Promise<expenseCategories[]> {
  const { data, error } = await supabase.from("expenseCategories").select("*");

  if (error) {
    console.error(error);
    throw new Error("Expense categories could not be loaded");
  }

  return data;
}
