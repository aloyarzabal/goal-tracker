import styled from "styled-components";
import { ExpenseCategory, expense } from "../types/expense";
import { useRef } from "react";
import { allSystemCategories } from "../utils/expenseUtils";
import { Modal } from "./Modal";

interface Props {
  onAdd: (expense: expense) => void;
  onClose: () => void;
}

export function NewExpenseModal({ onAdd, onClose }: Props) {
  const amountFieldRef = useRef<HTMLInputElement>(null);
  const conceptFieldRef = useRef<HTMLInputElement>(null);
  const categoryFieldRef = useRef<HTMLSelectElement>(null);
  const categories = allSystemCategories();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (
      amountFieldRef.current &&
      conceptFieldRef.current &&
      categoryFieldRef.current
    ) {
      const newExpense: expense = {
        id: -1,
        amount: +amountFieldRef.current.value,
        concept: conceptFieldRef.current.value,
        category: categoryFieldRef.current.value as ExpenseCategory,
      };

      onAdd(newExpense);

      amountFieldRef.current.value = "";
      conceptFieldRef.current.value = "";
    }
  };

  const options = categories.map((cat) => {
    return (
      <option value={cat} key={cat}>
        {cat}
      </option>
    );
  });

  const form = (
    <FormContainer>
      <form action="" className="newExpenseForm" onSubmit={handleSubmit}>
        <CloseButton onClick={onClose}>X</CloseButton>
        <InputWrapper>
          <label htmlFor="amount">Amount:</label>
          <input type="text" id="amount" name="amount" ref={amountFieldRef} />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="concept">Concept:</label>
          <input
            type="text"
            id="concept"
            name="concept"
            ref={conceptFieldRef}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="category">Category:</label>
          <select ref={categoryFieldRef}>{options}</select>
        </InputWrapper>
        <input type="submit" value="Add expense" />
      </form>
    </FormContainer>
  );

  return <Modal>{form}</Modal>;
}

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px;
  margin: 5px;
  border-radius: 50%;
  background-color: var(--white-color);
  line-height: 10px;
`;
