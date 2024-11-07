import styled from "styled-components";
import Heading from "../../../components/Heading";
import { expense } from "../types/expense";
import ExpensesFilters from "./ExpensesFilters";
import { ExpensesSummary } from "./ExpensesSummary";

interface Props {
  expenses: expense[];
}

export function ExpensesDashboard({ expenses }: Props) {
  return (
    <section>
      <Row>
        <Heading as="h2" $center>
          Dashboard
        </Heading>
        <ExpensesFilters />
      </Row>

      <ExpensesSummary expenses={expenses} />
    </section>
  );
}

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
