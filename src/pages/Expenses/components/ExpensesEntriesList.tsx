import styled, { css } from "styled-components";
import { expense, sortBy } from "../types/expense";
import { ExpenseListRow } from "./ExpenseListRow";
import Heading from "../../../components/Heading";
import { useMemo, useState } from "react";
import { sortExpenses } from "../utils/expenseUtils";
import { useSearchParams } from "react-router-dom";

const PAGE_LENGTH = 10;
const caretUp = <i className="fa fa-caret-up"></i>;
const caretDown = <i className="fa fa-caret-down"></i>;
const chevronLeft = <i className="fa fa-chevron-left"></i>;
const chevronRight = <i className="fa fa-chevron-right"></i>;

interface Props {
  expenses: expense[];
}

export function ExpensesEntriesList({ expenses }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [dateAsc, setDateAsc] = useState(true);
  const [amountAsc, setAmountAsc] = useState(true);

  const sort = searchParams.get("sortBy") || sortBy.DATEDESC;
  const pageNumber = Number(searchParams.get("page")) || 1;
  const numberOfExpenses = expenses.length;

  const sortedExpenses = useMemo(() => {
    if (expenses) {
      const se = sortExpenses(sort, expenses);
      const first = (pageNumber - 1) * PAGE_LENGTH;
      const last = PAGE_LENGTH * pageNumber;
      console.log(se.slice(first, last));
      return se.slice(first, last);
    }
  }, [sort, expenses, pageNumber]);

  const handleDateClick = () => {
    setDateAsc(() => !dateAsc);
    searchParams.set("sortBy", dateAsc ? sortBy.DATEASC : sortBy.DATEDESC);
    setSearchParams(searchParams);
  };

  const handleAmountClick = () => {
    setAmountAsc(() => !amountAsc);
    searchParams.set(
      "sortBy",
      amountAsc ? sortBy.AMOUNTASC : sortBy.AMOUNTDESC
    );
    setSearchParams(searchParams);
  };

  const showCaret = (value: boolean) => {
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
        <TableFooter totalExpenses={numberOfExpenses} />
      </Table>
    </ExpenseTableContainer>
  );
}

function TableBody({ expenses }: { expenses: expense[] }) {
  const expenseList = expenses.map((exp) => {
    return <ExpenseListRow key={exp.id} expense={exp} />;
  });

  return <tbody>{expenseList}</tbody>;
}

function TableFooter({ totalExpenses }: { totalExpenses: number }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNumber = Number(searchParams.get("page")) || 1;
  const isLastPage =
    totalExpenses === 0 ||
    pageNumber ===
      (totalExpenses % PAGE_LENGTH === 0
        ? totalExpenses / PAGE_LENGTH
        : Math.trunc(totalExpenses / PAGE_LENGTH + 1));

  const prevPage = () => {
    searchParams.set("page", String(pageNumber - 1));
    setSearchParams(searchParams);
  };
  const nextPage = () => {
    searchParams.set("page", String(pageNumber + 1));
    setSearchParams(searchParams);
  };

  const shownExpenses =
    totalExpenses === 0
      ? 0
      : isLastPage
        ? totalExpenses
        : PAGE_LENGTH * pageNumber;

  return (
    <tfoot>
      <tr>
        <td colSpan={5}>
          <StyledFooter>
            <P>
              Showing <StyledSpan>{shownExpenses}</StyledSpan> of
              <StyledSpan> {totalExpenses}</StyledSpan> expenses
            </P>
            <Buttons>
              <FooterButton
                onClick={prevPage}
                disabled={pageNumber === 1}
                $grayedOut={pageNumber === 1}
              >
                {chevronLeft} Previous
              </FooterButton>
              <FooterButton
                onClick={nextPage}
                $grayedOut={isLastPage}
                disabled={isLastPage}
              >
                Next {chevronRight}
              </FooterButton>
            </Buttons>
          </StyledFooter>
        </td>
      </tr>
    </tfoot>
  );
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

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledSpan = styled.span`
  font-weight: bold;
`;

const FooterButton = styled.button<{ $grayedOut?: boolean }>`
  border-radius: var(--border-radius-sm);
  padding: 0.75rem 1.5rem;
  ${(props) =>
    props.$grayedOut &&
    css`
      color: var(--color-grey-300);
    `}

  &:hover {
    ${(props) =>
      props.$grayedOut
        ? css`
            background-color: var(--color-grey-100);
          `
        : css`
            background-color: var(--color-main);
          `}
  }
`;

const Buttons = styled.div``;

const P = styled.p`
  padding: 0.75rem 1.5rem;
`;
