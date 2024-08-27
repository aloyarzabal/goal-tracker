import styled from "styled-components";
import { RepeatIcon } from "./icons/RepeatIcon";
import { SizeToMeasures } from "../pages/Expenses/utils/expenseUtils";

interface Props {
  icon: "repeat";
  size: "mini" | "small" | "medium" | "large";
}

export function Icon({ icon, size }: Props) {
  const iconSize = SizeToMeasures[size];
  const renderIcon = () => {
    switch (icon) {
      case "repeat":
        return <RepeatIcon {...iconSize} />;
      default:
        return <RepeatIcon {...iconSize} />;
    }
  };
  return <IconWrapper>{renderIcon()}</IconWrapper>;
}

const IconWrapper = styled.div`
  width: 100%;
`;
