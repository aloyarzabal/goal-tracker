import styled from "styled-components";

export function Header() {
  return <StyledHeader>HEADER</StyledHeader>;
}

const StyledHeader = styled.header`
  background-color: var(--color-grey-50);
  padding: 1.2rem 4.8rem;
`;
