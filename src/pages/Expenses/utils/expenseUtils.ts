import { expense, sortBy } from "../types/expense";

export const SizeToMeasures = {
  mini: { width: "18px", height: "18px" },
  small: { width: "25px", height: "25px" },
  medium: { width: "40px", height: "40px" },
  large: { width: "60px", height: "60px" },
};

export function formattedAmount(amount: number) {
  return amount.toFixed(2).replace(".", ",");
}

export const sortExpenses = (filter: sortBy, unsortedExpenses: expense[]) => {
  if (filter === sortBy.AMOUNTDESC) {
    return unsortedExpenses?.sort((a, b) => b.amount - a.amount);
  }
  if (filter === sortBy.AMOUNTASC) {
    return unsortedExpenses?.sort((a, b) => a.amount - b.amount);
  }
  if (filter === sortBy.DATEASC) {
    return unsortedExpenses?.sort((a, b) => {
      if (a.createdAt < b.createdAt) {
        return -1;
      }
      return 1;
    });
  }
  if (filter === sortBy.DATEDESC) {
    return unsortedExpenses?.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      }
      return 1;
    });
  }
  if (filter === sortBy.RECURRENT) {
    return unsortedExpenses?.sort((a, b) => {
      if (a.recurrent === false && b.recurrent === true) {
        return -1;
      }
      return 1;
    });
  }
};
