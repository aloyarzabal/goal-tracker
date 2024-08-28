import styled, { css } from "styled-components";
import { FoodIcon } from "./icons/FoodIcon";
import { HouseIcon } from "./icons/HouseIcon";
import { PaymentIcon } from "./icons/PaymentIcon";
import { StackedCoinsIcon } from "./icons/StackedCoinsIcon";
import { SizeToMeasures } from "../utils/expenseUtils";
import { ExpenseIcon } from "./icons/ExpenseIcon";
import { OthersIcon } from "./icons/OthersIcon";

interface Props {
  size: "small" | "medium" | "large";
  category: string;
}

export function CategoryIcon({ size, category }: Props) {
  const iconSize = SizeToMeasures[size];
  const renderIcon = () => {
    switch (category) {
      case "salary":
        return <StackedCoinsIcon color="green" {...iconSize} />;
      case "house":
        return <HouseIcon color="orange" {...iconSize} />;
      case "payments":
        return <PaymentIcon color="red" {...iconSize} />;
      case "food":
        return <FoodIcon color="violet" {...iconSize} />;
      case "expenses":
        return <ExpenseIcon color="cadetblue" {...iconSize} />;
      case "others":
        return <OthersIcon color="brown" {...iconSize} />;
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
    props.type === "payments" &&
    css`
      background-color: var(--color-red-100);
    `}

  ${(props) =>
    props.type === "salary" &&
    css`
      background-color: var(--color-green-100);
    `}

  ${(props) =>
    props.type === "food" &&
    css`
      background-color: var(--color-pink-100);
    `}

  ${(props) =>
    props.type === "house" &&
    css`
      background-color: var(--color-yellow-100);
    `}

  ${(props) =>
    props.type === "expenses" &&
    css`
      background-color: var(--color-cadetblue-25);
    `}

  ${(props) =>
    props.type === "others" &&
    css`
      background-color: var(--color-brown-10);
    `}
`;
