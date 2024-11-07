import styled from "styled-components";

interface Props {
  defaultValue: string;
  handleChange: (ev: React.ChangeEvent<HTMLSelectElement>) => void;
  options: {
    value: string;
    name: string;
  }[];
}

export default function Filter({ defaultValue, options, handleChange }: Props) {
  const opts = options.map((opt) => (
    <option key={opt.value} value={opt.value}>
      {opt.name}
    </option>
  ));

  return (
    <Container>
      <StyledSelect
        id="month-select"
        onChange={handleChange}
        defaultValue={defaultValue}
      >
        {opts}
      </StyledSelect>
    </Container>
  );
}

const Container = styled.div``;

const StyledSelect = styled.select`
  padding: 4px 12px;
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
`;
