import styled from "styled-components";
import { ExpenseCategory, expense } from "../types/expense";
import { useRef } from "react";
import { allSystemCategories } from "../utils/expenseUtils";
import { Modal } from "./Modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { addExpense } from "../../../api/apiExpenses";
import { Button } from "../../../components/Button";

interface Props {
  onClose: () => void;
}

export function NewExpenseModal({ onClose }: Props) {
  const categoryFieldRef = useRef<HTMLSelectElement>(null);
  const categories = allSystemCategories();
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const { mutate } = useMutation({
    mutationFn: addExpense,
    onSuccess: () => {
      toast.success("Expense added successfully");
      queryClient.invalidateQueries({
        queryKey: ["expenses"],
      });
      reset();
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (categoryFieldRef.current) {
      const newExpense: expense = {
        id: -1,
        amount: data.amount,
        concept: data.concept,
        category: categoryFieldRef.current.value as ExpenseCategory,
      };

      mutate(newExpense);
      onClose();
    }
  };

  const dropdownOptions = categories.map((cat) => {
    return (
      <option value={cat} key={cat} selected={cat === ExpenseCategory.PAYMENTS}>
        {cat}
      </option>
    );
  });

  function onError() {
    console.log(errors);
  }

  const form = (
    <FormContainer>
      <Form action="">
        <CloseButton onClick={onClose}>X</CloseButton>
        <InputWrapper>
          <label htmlFor="amount">Amount:</label>
          <input
            type="text"
            id="amount"
            autoFocus
            {...register("amount", {
              required: "This field is required",
              min: { value: 0, message: "Minimum value is zero" },
            })}
          />
          {errors?.amount?.message && <Error>{errors.amount.message}</Error>}
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="concept">Concept:</label>
          <input
            type="text"
            id="concept"
            {...register("concept", {
              required: "This field is required",
            })}
          />
          {errors?.concept?.message && <Error>{errors.concept.message}</Error>}
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="category">Category:</label>
          <select ref={categoryFieldRef}>{dropdownOptions}</select>
        </InputWrapper>
        <Button onClick={handleSubmit(onSubmit, onError)}>Add expense</Button>
      </Form>
    </FormContainer>
  );

  return <Modal>{form}</Modal>;
}

const Form = styled.form`
  padding: 18px 35px;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

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

const Error = styled.span`
  color: var(--color-red-700);
`;
