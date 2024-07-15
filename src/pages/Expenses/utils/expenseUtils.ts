import { ExpenseCategory } from "../types/expense";

// Returns all categories except "default" as it's used for errors
export const allSystemCategories = () => {
  return Object.values(ExpenseCategory).filter((cat) => cat !== "default");
};

export const SizeToMeasures = {
  mini: { width: "18px", height: "18px" },
  small: { width: "25px", height: "25px" },
  medium: { width: "40px", height: "40px" },
  large: { width: "60px", height: "60px" },
};
