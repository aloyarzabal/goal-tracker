import styled from "styled-components";
import { months, todaysMonthName } from "../../../utils/formatDate";
import { useSearchParams } from "react-router-dom";

export default function ExpensesFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedMonth = searchParams.get("month") || todaysMonthName();

  const dropdownMonths = Object.values(months).map((month) => (
    <option key={month} value={month}>
      {month}
    </option>
  ));

  const handleChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    const value = ev.target.value;
    searchParams.set("month", value);
    setSearchParams(searchParams);
  };

  return (
    <Container>
      <Label htmlFor="month-select">Month:</Label>
      <select
        id="month-select"
        onChange={handleChange}
        defaultValue={selectedMonth}
      >
        {dropdownMonths}
      </select>
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--color-grey-0);
  padding: 1rem 5rem;
  margin: 10px 0;
  border-radius: var(--border-radius-sm);
`;

const Label = styled.label`
  padding-right: 2rem;
`;
