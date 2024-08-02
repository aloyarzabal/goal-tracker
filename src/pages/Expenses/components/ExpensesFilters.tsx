import styled from "styled-components";
import { months, nameToMonth } from "../../../utils/formatDate";

interface Props {
  defaultValue: months;
  onSelect: (value: months) => void;
}

export default function ExpensesFilters({ defaultValue, onSelect }: Props) {
  const dropdownMonths = Object.values(months).map((month) => (
    <option key={month} value={month}>
      {month}
    </option>
  ));

  const handleChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    const value = ev.target.value;

    onSelect(nameToMonth(value));
  };

  return (
    <Container>
      <Label htmlFor="month-select">Month:</Label>
      <select
        id="month-select"
        onChange={handleChange}
        defaultValue={defaultValue}
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
