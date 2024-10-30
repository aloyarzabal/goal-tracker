import styled from "styled-components";
import { expense, sortBy } from "../types/expense";
import { ExpenseListRow } from "./ExpenseListRow";
import Heading from "../../../components/Heading";
import { useMemo, useState } from "react";
import { sortExpenses } from "../utils/expenseUtils";

interface Props {
  expenses: expense[];
}

export function ExpensesEntriesList({ expenses }: Props) {
  const [dateAsc, setDateAsc] = useState(true);
  const [amountAsc, setAmountAsc] = useState(true);
  const [sort, setSort] = useState(sortBy.DATEDESC);

  const sortedExpenses = useMemo(() => {
    if (expenses && sort) {
      return sortExpenses(sort, expenses);
    }
  }, [sort, expenses]);

  const handleDateClick = () => {
    setDateAsc(() => !dateAsc);
    setSort(dateAsc ? sortBy.DATEASC : sortBy.DATEDESC);
  };

  const handleAmountClick = () => {
    setAmountAsc(() => !amountAsc);
    setSort(amountAsc ? sortBy.AMOUNTASC : sortBy.AMOUNTDESC);
  };

  const showCaret = (value: boolean) => {
    const caretUp = <i className="fa fa-caret-up"></i>;
    const caretDown = <i className="fa fa-caret-down"></i>;

    return value ? caretDown : caretUp;
  };

  const TableHeaders = () => {
    return (
      <thead>
        <TR>
          <th></th>
          <th onClick={handleDateClick}>Date {showCaret(dateAsc)}</th>
          <th>R</th>
          <th onClick={handleAmountClick}>Amount {showCaret(amountAsc)}</th>
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
        <TableBody expenses={sortedExpenses ?? expenses} />
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
