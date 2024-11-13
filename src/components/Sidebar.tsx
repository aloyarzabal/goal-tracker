import styled from "styled-components";
import { MainNav } from "./MainNav";
import Logo from "./Logo";

const StyledSidebar = styled.aside`
  padding: 3.2rem 2.4rem;
  background-color: var(--color-grey-50);

  grid-row: 1 / -1;
  grid-column: 1;
`;

export function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}
