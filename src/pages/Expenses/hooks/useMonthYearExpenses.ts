import { useQuery } from "@tanstack/react-query";
import { getExpensesByMonth } from "../../../api/apiExpenses";
import { mapExpenseFromApi } from "../types/expense";
import {
  stringToNumber,
  todaysMonthName,
  todaysYear,
} from "../../../utils/formatDate";
import { useSearchParams } from "react-router-dom";

export function useMonthYearExpenses() {
  const [searchParams] = useSearchParams();

  const month = searchParams.get("month") || todaysMonthName();
  const year = Number(searchParams.get("year")) || todaysYear();

  const monthNumber = stringToNumber(month) || 1;

  const { data, isLoading } = useQuery({
    queryKey: ["expenses", month, year],
    queryFn: () => getExpensesByMonth(monthNumber, year),
  });

  const expenses = data && mapExpenseFromApi(data);

  return { expenses, isLoading };
}
