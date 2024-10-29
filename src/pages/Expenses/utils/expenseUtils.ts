export const SizeToMeasures = {
  mini: { width: "18px", height: "18px" },
  small: { width: "25px", height: "25px" },
  medium: { width: "40px", height: "40px" },
  large: { width: "60px", height: "60px" },
};

export function formattedAmount(amount: number) {
  return amount.toFixed(2).replace(".", ",");
}
