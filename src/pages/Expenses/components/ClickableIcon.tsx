import styled from "styled-components";
import { SizeToMeasures } from "../utils/expenseUtils";
import { DeleteIcon } from "./icons/DeleteIcon";
import { EditIcon } from "./icons/EditIcon";

interface Props {
  icon: "edit" | "delete";
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
      default:
        return <DeleteIcon {...iconSize} />;
    }
  };
  return <IconWrapper onClick={onClick}>{renderIcon()}</IconWrapper>;
}

const IconWrapper = styled.div`
  margin: auto 0;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
