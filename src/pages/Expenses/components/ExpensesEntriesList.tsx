import styled from "styled-components";
import { expense, sortBy } from "../types/expense";
import { ExpenseListRow } from "./ExpenseListRow";
import Heading from "../../../components/Heading";
import { useState } from "react";

interface Props {
  expenses: expense[];
  handleSort: (sortBy: sortBy) => void;
}

export function ExpensesEntriesList({ expenses, handleSort }: Props) {
  const [dateAsc, setDateAsc] = useState(true);
  const [amountAsc, setAmountAsc] = useState(true);

  const handleDateClick = () => {
    setDateAsc(() => !dateAsc);
    handleSort(dateAsc ? sortBy.DATEASC : sortBy.DATEDESC);
  };

  const handleAmountClick = () => {
    setAmountAsc(() => !amountAsc);
    handleSort(amountAsc ? sortBy.AMOUNTASC : sortBy.AMOUNTDESC);
  };

  const TableHeaders = () => {
    return (
      <thead>
        <TR>
          <th></th>
          <th>
            <button onClick={handleDateClick}>
              Date {dateAsc ? "^" : "V"}
            </button>
          </th>
          <th>R</th>
          <th onClick={handleAmountClick}>Amount {amountAsc ? "^" : "V"}</th>
          <TextTH>Concept</TextTH>
        </TR>
      </thead>
    );
  };
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

interface BodyProps {
  expenses: expense[];
}

function TableBody({ expenses }: BodyProps) {
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

  & th {
    cursor: pointer;
  }
`;

const ExpenseTableContainer = styled.div`
  border-radius: var(--border-radius-md);
  padding: 3rem 5rem;
  margin-bottom: 2rem;
  background-color: var(--color-grey-0);
`;
