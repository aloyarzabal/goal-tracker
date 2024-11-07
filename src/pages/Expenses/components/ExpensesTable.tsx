import styled, { css } from "styled-components";
import { expense, sortBy } from "../types/expense";
import { ExpenseListRow } from "./ExpenseListRow";
import Heading from "../../../components/Heading";
import { useMemo, useState } from "react";
import { sortExpenses } from "../utils/expenseUtils";
import { useSearchParams } from "react-router-dom";
import { PAGE_LENGTH } from "../utils/constants";
import ExpensesFilters from "./ExpensesFilters";

const caretUp = <i className="fa fa-caret-up"></i>;
const caretDown = <i className="fa fa-caret-down"></i>;
const chevronLeft = <i className="fa fa-chevron-left"></i>;
const chevronRight = <i className="fa fa-chevron-right"></i>;

interface Props {
  expenses: expense[];
}

export function ExpensesTable({ expenses }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [dateAsc, setDateAsc] = useState(true);
  const [amountAsc, setAmountAsc] = useState(true);

  const sort = searchParams.get("sortBy") || sortBy.DATEDESC;
  const currentPage = Number(searchParams.get("page")) || 1;
  const numberOfExpenses = expenses.length;

  const sortedExpenses = useMemo(() => {
    if (expenses) {
      const first = (currentPage - 1) * PAGE_LENGTH;
      const last = PAGE_LENGTH * currentPage;
      return sortExpenses(sort, expenses).slice(first, last);
    }
    return expenses;
  }, [sort, expenses, currentPage]);

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
      <Thead>
        <TR>
          <th></th>
          <th onClick={handleDateClick}>Date {showCaret(dateAsc)}</th>
          <th>R</th>
          <TextTH onClick={handleAmountClick}>
            Amount {showCaret(amountAsc)}
          </TextTH>
          <TextTH>Concept</TextTH>
        </TR>
      </Thead>
    );
  };
  return (
    <ExpenseTableContainer>
      <Heading as="h2">All expenses</Heading>
      <Table>
        <TableHeaders />
        <TableBody expenses={sortedExpenses} />
        <TableFooter numberOfExpenses={numberOfExpenses} />
      </Table>
    </ExpenseTableContainer>
  );
}

function TableBody({ expenses }: Props) {
  const expenseList = expenses.map((exp) => {
    return <ExpenseListRow key={exp.id} expense={exp} />;
  });

  return <tbody>{expenseList}</tbody>;
}

function TableFooter({ numberOfExpenses }: { numberOfExpenses: number }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const lastPage = Math.ceil(numberOfExpenses / PAGE_LENGTH);

  const isLastPage = numberOfExpenses === 0 || currentPage === lastPage;

  const prevPage = () => {
    searchParams.set("page", String(currentPage - 1));
    setSearchParams(searchParams);
  };
  const nextPage = () => {
    searchParams.set("page", String(currentPage + 1));
    setSearchParams(searchParams);
  };

  const first =
    numberOfExpenses === 0 ? 0 : (currentPage - 1) * PAGE_LENGTH + 1;
  const last = isLastPage ? numberOfExpenses : PAGE_LENGTH * currentPage;

  return (
    <tfoot>
      <tr>
        <td colSpan={6}>
          <StyledFooter>
            <P>
              Showing <StyledSpan>{first}</StyledSpan> to
              <StyledSpan> {last} </StyledSpan>of
              <StyledSpan> {numberOfExpenses}</StyledSpan> expenses
            </P>
            <Buttons>
              <FooterButton
                onClick={prevPage}
                disabled={currentPage === 1}
                $grayedOut={currentPage === 1}
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
  border-radius: var(--border-radius-lg);
  width: 100%;
  border: 1px solid var(--color-grey-200);
  border-collapse: collapse;

  /* & tr:nth-of-type(even) {
    background-color: var(--color-grey-50);

    & td:first-of-type,
    td:last-of-type {
      background-color: var(--color-grey-0);
    }
  } */
`;

const TextTH = styled.th`
  text-align: left;
`;

const TR = styled.tr`
  border-bottom: 1px solid var(--color-gray-100);
  font-weight: 500;

  & th {
    cursor: pointer;
    font-weight: 800;
    font-size: 1.4rem;
  }
`;

const ExpenseTableContainer = styled.div`
  margin-bottom: 2rem;
`;

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
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

const Thead = styled.thead`
  height: 50px;
  text-transform: uppercase;
`;
