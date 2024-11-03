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

export const sortExpenses = (
  filter: sortBy | string,
  unsortedExpenses: expense[]
) => {
  switch (filter) {
    case sortBy.AMOUNTDESC:
      return unsortedExpenses?.sort((a, b) => b.amount - a.amount);
    case sortBy.AMOUNTASC:
      return unsortedExpenses?.sort((a, b) => a.amount - b.amount);
    case sortBy.DATEASC:
      return unsortedExpenses?.sort((a, b) => {
        if (a.createdAt < b.createdAt) {
          return -1;
        }
        return 1;
      });
    case sortBy.RECURRENT:
      return unsortedExpenses?.sort((a, b) => {
        if (a.recurrent === false && b.recurrent === true) {
          return -1;
        }
        return 1;
      });
    case sortBy.DATEDESC:
    default:
      return unsortedExpenses?.sort((a, b) => {
        if (a.createdAt > b.createdAt) {
          return -1;
        }
        return 1;
      });
  }
};
