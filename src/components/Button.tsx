import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

export function Button({ children, onClick }: Props) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  border-radius: var(--border-radius-sm);
  color: var(--color-grey-0);
  background-color: var(--color-main);
  margin-top: 30px;
  padding: 1.5rem;
  transition: transform 0.1s ease;

  &:hover {
    transform: translateY(-0.33em);
  }

  &:active {
    transform: translateY(-0);
  }
`;
