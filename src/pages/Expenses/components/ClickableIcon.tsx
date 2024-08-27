import styled from "styled-components";
import { SizeToMeasures } from "../utils/expenseUtils";
import { DeleteIcon } from "./icons/DeleteIcon";
import { EditIcon } from "./icons/EditIcon";
import { RepeatIcon } from "../../../components/icons/RepeatIcon";

interface Props {
  icon: "edit" | "delete" | "repeat";
  size: "small" | "medium" | "large" | "mini";
  onClick: () => void;
}

export function ClickableIcon({ icon, size, onClick }: Props) {
  const iconSize = SizeToMeasures[size];
  const renderIcon = () => {
    switch (icon) {
      case "delete":
        return <DeleteIcon {...iconSize} />;
      case "edit":
        return <EditIcon {...iconSize} />;
      case "repeat":
        return <RepeatIcon {...iconSize} />;
      default:
        return <DeleteIcon {...iconSize} />;
    }
  };
  return <IconWrapper onClick={onClick}>{renderIcon()}</IconWrapper>;
}

const IconWrapper = styled.div`
  cursor: pointer;
  width: 100%;
`;
