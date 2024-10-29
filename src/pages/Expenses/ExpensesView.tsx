import styled from "styled-components";
import { ExpensesTabs } from "./components/ExpensesTabs";
import { StatsExpensesTab } from "./components/StatsExpensesTab";
import { SummaryExpensesTab } from "./components/SummaryExpensesTab";

export function ExpensesView() {
  return (
    <ViewWrapper>
      {/* <ExpensesTabs />
      <StatsExpensesTab /> */}
      <SummaryExpensesTab />
    </ViewWrapper>
  );
}

const ViewWrapper = styled.div`
  width: 800px;
  margin: 1.2rem auto;
  height: 100%;
`;
