import styled from "styled-components";

interface Props {
  onClick: () => void;
}

export function AddExpenseButton({ onClick }: Props) {
  return <Button onClick={onClick}> + Add Expense</Button>;
}

const Button = styled.button`
  border-radius: var(--border-radius);
  line-height: 30px;
  color: var(--text-color);
  background-color: white;
  box-shadow: 0px 4px 1px gray;
  border: 2.5px solid black;
  padding: 8px 17px;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  transition: transform 0.1s ease;

  &:hover {
    transform: translateY(-0.33em);
  }

  &:active {
    transform: translateY(-0);
  }
`;
