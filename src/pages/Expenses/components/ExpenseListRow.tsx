import styled from "styled-components";
import { expense } from "../types/expense";
import { CategoryIcon } from "./CategoryIcon";
import { useState } from "react";
import { ClickableIcon } from "./ClickableIcon";
import { formatDateDayMonth } from "../../../utils/formatDate";
import { Modal } from "./Modal";
import { ExpenseForm } from "./ExpenseForm";
import { useDeleteExpense } from "../hooks/useDeleteExpense";
import { ConfirmDeletionMessage } from "./ConfirmDeletionMessage";
import { Icon } from "../../../components/Icon";
import { formattedAmount } from "../utils/expenseUtils";

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

  const [hovered, setHovered] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showConfirmDeletion, setShowConfirmDeletion] = useState(false);
  const { mutateDel } = useDeleteExpense();
  const date = formatDateDayMonth(createdAt);

  const handleOnMouseOver = () => {
    setHovered(true);
  };

  const handleOnMouseLeave = () => {
    setHovered(false);
  };

  const deleteRow = () => {
    mutateDel(expenseId);
    setShowConfirmDeletion(false);
  };

  const editExpenseModal = (
    <Modal>
      <ExpenseForm
        onClose={() => setShowEditModal(!showEditModal)}
        expense={expense}
      />
    </Modal>
  );

  const confirmDeletionMessage = (
    <Modal>
      <ConfirmDeletionMessage
        onConfirm={deleteRow}
        onCancel={() => setShowConfirmDeletion(false)}
        title="expense"
      />
    </Modal>
  );

  return (
    <TR onMouseOver={handleOnMouseOver} onMouseLeave={handleOnMouseLeave}>
      <IconCell>
        <CategoryIcon category={category} size="small" />
      </IconCell>
      <DateCell>{date}</DateCell>
      <IconCell>
        {recurrent && <Icon icon="repeat" size="mini"></Icon>}
      </IconCell>
      <AmountCell>{formattedAmount(amount)}</AmountCell>
      <TextCell>{concept}</TextCell>
      <IconsCell>
        <Wrapper>
          {hovered && (
            <>
              <ClickableIcon
                icon="threedots"
                size="mini"
                onClick={() => setShowEditModal(true)}
              />
            </>
          )}

          {hovered && (
            <>
              <ClickableIcon
                icon="delete"
                size="mini"
                onClick={() => setShowConfirmDeletion(true)}
              />
            </>
          )}
        </Wrapper>
        {showEditModal && editExpenseModal}
        {showConfirmDeletion && confirmDeletionMessage}
      </IconsCell>
    </TR>
  );
}

const TR = styled.tr`
  text-align: center;
  height: 35px;
  background-color: var(--color-grey-0);
  border-bottom: 1px solid var(--color-grey-100);

  &:hover {
    background-color: var(--color-grey-50);

    /* & td:last-of-type,
    td:first-of-type {
      background-color: var(--color-grey-0);
    } */
  }
`;

const TextCell = styled.td`
  text-align: left;
  padding-left: 10px;
`;
const AmountCell = styled.td`
  min-width: 7rem;
  text-align: left;
  padding-left: 10px;
`;

const DateCell = styled.td`
  font-size: 1.3rem;
  color: var(--color-grey-400);
`;

const IconCell = styled.td`
  width: 1rem;
  padding: 0 10px;
`;

const IconsCell = styled.td`
  width: 6rem;
`;

const Wrapper = styled.div`
  display: flex;
`;
