import styled from "styled-components";
import { expense } from "../types/expense";
import { ExpenseListRow } from "./ExpenseListRow";
import Heading from "../../../components/Heading";

interface Props {
  expenses: expense[];
}

export function ExpensesEntriesList({ expenses }: Props) {
  const expenseList = expenses.map((exp) => {
    return <ExpenseListRow key={exp.id} expense={exp} />;
  });

  return (
    <ExpenseTable>
      <Heading as="h2">Last expenses</Heading>
      {expenseList}
    </ExpenseTable>
  );
}

const ExpenseTable = styled.div`
  border-radius: var(--border-radius-md);
  padding: 3rem 5rem;
  background-color: var(--color-grey-0);
`;
