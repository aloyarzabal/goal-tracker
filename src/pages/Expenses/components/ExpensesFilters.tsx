import styled from "styled-components";
import YearFilter from "./YearFilter";
import MonthFilter from "./MonthFilter";

export default function ExpensesFilters() {
  return (
    <Wrapper>
      <MonthFilter />
      <YearFilter />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
