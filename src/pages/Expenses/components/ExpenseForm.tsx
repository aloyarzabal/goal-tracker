import styled from "styled-components";
import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import {
  expense,
  ExpenseCategory,
  expenseToJSON,
  expenseToJSONNoId,
} from "../types/expense";
import { dateDashed, todayFullDateDashed } from "../../../utils/formatDate";
import { useRef } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { addExpense, updateExpense } from "../../../api/apiExpenses";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCategories } from "../hooks/useCategories";

interface Props {
  expense?: expense;
  onClose: () => void;
}

export function ExpenseForm({ expense, onClose }: Props) {
  const categoryFieldRef = useRef<HTMLSelectElement>(null);

  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const queryClient = useQueryClient();
  const { categories, isLoading } = useCategories();

  const isEdit = !!expense?.id;
  const today = todayFullDateDashed();

  if (isLoading || !categories) return;

  const dropdownOptions = categories.map((cat) => {
    return (
      cat.active && (
        <option value={cat.category} key={cat.category}>
          {cat.category}
        </option>
      )
    );
  });

  const { mutate: mutateAdd } = useMutation({
    mutationFn: addExpense,
    onSuccess: () => {
      toast.success("Expense added successfully");
      queryClient.invalidateQueries({
        queryKey: ["expenses"],
      });
      reset();
    },
  });

  const { mutate: mutateEdit } = useMutation({
    mutationFn: updateExpense,
    onSuccess: () => {
      toast.success("Expense successfully edited");
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
    onError: (err) => toast.error(err.message),
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (!isEdit && categoryFieldRef.current) {
      const newExpense: expense = {
        id: -1,
        amount: data.amount,
        concept: data.concept,
        category: categoryFieldRef.current.value as ExpenseCategory,
        createdAt: new Date(data.date),
        recurrent: data.recurrent,
      };

      const exp = expenseToJSONNoId(newExpense);
      mutateAdd(exp);
      onClose();
    }

    if (isEdit && categoryFieldRef.current) {
      const editExpense: expense = {
        id: expense.id,
        amount: data.amount,
        concept: data.concept,
        category: categoryFieldRef.current.value as ExpenseCategory,
        createdAt: new Date(data.date),
        recurrent: data.recurrent,
      };
      const exp = expenseToJSON(editExpense);
      mutateEdit(exp);
      onClose();
    }
  };

  function onError() {
    console.log(errors);
  }

  return (
    <Form action="">
      <Heading as="h2" $center>
        {isEdit ? "Edit" : "New"} Expense
      </Heading>
      <CloseButton onClick={onClose}>X</CloseButton>
      <InputWrapper>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          defaultValue={isEdit ? expense.amount : ""}
          autoFocus
          {...register("amount", {
            required: "This field is required",
            min: { value: 0, message: "Minimum value is zero" },
          })}
        />
        {errors?.amount?.message && (
          <Error>{errors.amount.message as string}</Error>
        )}
      </InputWrapper>

      <InputWrapper>
        <label htmlFor="concept">Concept:</label>
        <input
          type="text"
          id="concept"
          defaultValue={isEdit ? expense.concept : ""}
          {...register("concept", {
            required: "This field is required",
          })}
        />
        {errors?.concept?.message && (
          <Error>{errors.concept.message as string}</Error>
        )}
      </InputWrapper>

      <InputWrapper>
        <label htmlFor="category">Category:</label>
        <select
          ref={categoryFieldRef}
          defaultValue={isEdit ? expense?.category : ExpenseCategory.PAYMENTS}
        >
          {dropdownOptions}
        </select>
      </InputWrapper>

      <InputWrapper>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          defaultValue={isEdit ? dateDashed(expense.createdAt) : today}
          id="date"
          {...register("date", {
            required: "This field is required",
          })}
        />
        {errors?.concept?.message && (
          <Error>{errors.concept.message as string}</Error>
        )}
      </InputWrapper>

      <InputWrapper>
        <label htmlFor="recurrent">Is recurrent?:</label>
        <input
          type="checkbox"
          defaultChecked={isEdit ? expense.recurrent : false}
          id="recurrent"
          {...register("recurrent")}
        />
      </InputWrapper>

      <ButtonsWrapper>
        <div>
          <Button $secondary onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit(onSubmit, onError)}>
            {isEdit ? "Update" : "Add"} expense
          </Button>
        </div>
      </ButtonsWrapper>
    </Form>
  );
}

const Form = styled.form`
  padding: 4rem 3.4rem;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

const InputWrapper = styled.div`
  border-bottom: 1px solid var(--color-grey-100);
  padding-bottom: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1.3fr;
  gap: 15px;

  & span {
    text-align: center;
  }
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

const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  & div {
    grid-column-start: 3;
    display: flex;
    gap: 1.5rem;
  }
`;
