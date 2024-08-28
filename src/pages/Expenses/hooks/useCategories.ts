import { useQuery } from "@tanstack/react-query";
import { getExpenseCategories } from "../../../api/apiCategories";

export function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["expenseCategories"],
    queryFn: getExpenseCategories,
  });

  const categories = data;

  return { categories, isLoading };
}
