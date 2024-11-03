import { useQuery } from "@tanstack/react-query";
import { getExpensesByMonth } from "../../../api/apiExpenses";
import { mapExpenseFromApi } from "../types/expense";
import { stringToNumber, todaysMonthName } from "../../../utils/formatDate";
import { useSearchParams } from "react-router-dom";

export function useMonthExpenses() {
  const [searchParams] = useSearchParams();
  // TODO crear variable DEFAULT_MONTH = todaysMonthName()
  const month = searchParams.get("month") || todaysMonthName();

  const stringMonth = stringToNumber(month) || 1;

  const { data, isLoading } = useQuery({
    queryKey: ["expenses", month],
    queryFn: () => getExpensesByMonth(stringMonth),
  });

  const expenses = data && mapExpenseFromApi(data);

  return { expenses, isLoading };
}
