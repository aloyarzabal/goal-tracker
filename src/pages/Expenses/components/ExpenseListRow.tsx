import styled from "styled-components";
import { expense } from "../types/expense";
import { Icon } from "./Icon";
import { useState } from "react";
import { ClickableIcon } from "./ClickableIcon";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteExpense } from "../../../api/apiExpenses";
import toast from "react-hot-toast";
import { formatDateDayMonth } from "../../../utils/formatDate";

interface Props {
  expense: expense;
}

export function ExpenseListRow({ expense }: Props) {
  const {
    id: expenseId,
    amount,
    concept,
    category,
    createdAt,
    recurrent,
  } = expense;
  const date = formatDateDayMonth(createdAt);

  const [hovered, setHovered] = useState(false);
  const queryClient = useQueryClient();

  const handleOnMouseOver = () => {
    setHovered(true);
  };

  const handleOnMouseLeave = () => {
    setHovered(false);
  };

  const { mutate } = useMutation({
    mutationFn: deleteExpense,
    onSuccess: () => {
      toast.success("Expense successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <Row onMouseOver={handleOnMouseOver} onMouseLeave={handleOnMouseLeave}>
      <DateField>{date}</DateField>
      <AmountField>{amount}</AmountField>
      <Icon category={category} size="small" />
      <TextField>{concept}</TextField>
      {hovered && (
        <ClickableIcon
          icon="edit"
          size="mini"
          onClick={() => mutate(expenseId)}
        />
      )}
      {hovered && (
        <ClickableIcon
          icon="delete"
          size="mini"
          onClick={() => mutate(expenseId)}
        />
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

const DateField = styled.p`
  margin: auto 0;
  font-size: 1.3rem;
  color: var(--color-grey-400);
`;
