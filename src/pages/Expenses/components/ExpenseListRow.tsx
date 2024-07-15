import styled from "styled-components";
import { expense } from "../types/expense";
import { Icon } from "./Icon";
import { useState } from "react";
import { ClickableIcon } from "./ClickableIcon";

interface Props {
  expense: expense;
  onDelete: (idToDelete: number) => void;
}

export function ExpenseListRow({ expense, onDelete }: Props) {
  const [hovered, setHovered] = useState(false);

  const handleOnMouseOver = () => {
    setHovered(true);
  };

  const handleOnMouseLeave = () => {
    setHovered(false);
  };

  const handleDeleteRow = () => {
    onDelete(expense.id);
  };

  const handleEditRow = () => {};

  return (
    <Row onMouseOver={handleOnMouseOver} onMouseLeave={handleOnMouseLeave}>
      <AmountField>{expense.amount}</AmountField>
      <Icon category={expense.category} size="small" />
      <TextField>{expense.concept}</TextField>
      {hovered && (
        <ClickableIcon icon="edit" size="mini" onClick={handleDeleteRow} />
      )}
      {hovered && (
        <ClickableIcon icon="delete" size="mini" onClick={handleDeleteRow} />
      )}
    </Row>
  );
}

const Row = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid var(--color-grey-100);

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const AmountField = styled.p`
  width: 80px;
  text-align: center;
`;

const TextField = styled.p`
  min-width: 100px;
`;
