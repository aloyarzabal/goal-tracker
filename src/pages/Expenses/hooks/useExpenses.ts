import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "../../../api/apiExpenses";
import { mapExpenseFromApi } from "../types/expense";
import { getMonthFromRawDate, months } from "../../../utils/formatDate";

export function useExpenses(month: months) {
  const { data, isLoading } = useQuery({
    queryKey: ["expenses"],
    queryFn: getExpenses,
  });

  const mappedExpenses = data && mapExpenseFromApi(data);

  const expenses = mappedExpenses?.filter(
    (exp) => getMonthFromRawDate(exp.createdAt) === month
  );

  return { expenses, isLoading };
}
