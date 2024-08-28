import toast from "react-hot-toast";
import { deleteExpense } from "../../../api/apiExpenses";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteExpense() {
  const queryClient = useQueryClient();

  const { mutate: mutateDel } = useMutation({
    mutationFn: deleteExpense,
    onSuccess: () => {
      toast.success("Expense successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutateDel };
}
