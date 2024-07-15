import styled, { css } from "styled-components";
import { ExpenseCategory } from "../types/expense";
import { FoodIcon } from "./icons/FoodIcon";
import { HouseIcon } from "./icons/HouseIcon";
import { PaymentIcon } from "./icons/PaymentIcon";
import { StackedCoinsIcon } from "./icons/StackedCoinsIcon";
import { SizeToMeasures } from "../utils/expenseUtils";

interface Props {
  size: "small" | "medium" | "large";
  category: ExpenseCategory;
}

export function Icon({ size, category }: Props) {
  const iconSize = SizeToMeasures[size];
  const renderIcon = () => {
    switch (category) {
      case ExpenseCategory.SALARY:
        return <StackedCoinsIcon color="green" {...iconSize} />;
      case ExpenseCategory.HOUSE:
        return <HouseIcon color="orange" {...iconSize} />;
      case ExpenseCategory.PAYMENTS:
        return <PaymentIcon color="red" {...iconSize} />;
      case ExpenseCategory.FOOD:
        return <FoodIcon color="violet" {...iconSize} />;
      default:
        return <StackedCoinsIcon />;
    }
  };

  return <IconWrapper type={category}>{renderIcon()}</IconWrapper>;
}

const IconWrapper = styled.div<{ type?: string }>`
  margin: auto 0;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  border-radius: 50%;

  ${(props) =>
    props.type === ExpenseCategory.PAYMENTS &&
    css`
      background-color: var(--color-red-100);
    `}

  ${(props) =>
    props.type === ExpenseCategory.SALARY &&
    css`
      background-color: var(--color-green-100);
    `}

  ${(props) =>
    props.type === ExpenseCategory.FOOD &&
    css`
      background-color: var(--color-pink-100);
    `}

  ${(props) =>
    props.type === ExpenseCategory.HOUSE &&
    css`
      background-color: var(--color-yellow-100);
    `}
`;
