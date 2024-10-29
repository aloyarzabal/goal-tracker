import styled from "styled-components";
import { expense } from "../types/expense";
import { ExpenseListRow } from "./ExpenseListRow";
import Heading from "../../../components/Heading";

interface Props {
  expenses: expense[];
}

export function ExpensesEntriesList({ expenses }: Props) {
  return (
    <ExpenseTableContainer>
      <Heading as="h3">Last expenses</Heading>
      <Table>
        <TableHeaders />
        <TableBody expenses={expenses} />
      </Table>
    </ExpenseTableContainer>
  );
}

function TableHeaders() {
  return (
    <thead>
      <TR>
        <th></th>
        <th>Date</th>
        <th>R</th>
        <th>Amount</th>
        <TextTH>Concept</TextTH>
      </TR>
    </thead>
  );
}

function TableBody({ expenses }: Props) {
  const expenseList = expenses.map((exp) => {
    return <ExpenseListRow key={exp.id} expense={exp} />;
  });

  return <tbody>{expenseList}</tbody>;
}

const Table = styled.table`
  width: 100%;
  border: none;

  & tr:nth-of-type(even) {
    background-color: var(--color-grey-50);

    & td:first-of-type,
    td:last-of-type {
      background-color: var(--color-grey-0);
    }
  }
`;

const TextTH = styled.th`
  text-align: left;
  padding-left: 10px;
`;

const TR = styled.tr`
  border-bottom: 1px solid var(--color-gray-100);
`;

const ExpenseTableContainer = styled.div`
  border-radius: var(--border-radius-md);
  padding: 3rem 5rem;
  margin-bottom: 2rem;
  background-color: var(--color-grey-0);
`;
