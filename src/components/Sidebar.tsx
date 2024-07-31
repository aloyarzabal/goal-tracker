import styled from "styled-components";
import { Image } from "./Image";
import Heading from "./Heading";
import { MainNav } from "./MainNav";

const StyledSidebar = styled.aside`
  padding: 3.2rem 2.4rem;
  background-color: var(--color-grey-50);

  grid-row: 1 / -1;
  grid-column: 1;
`;

export function Sidebar() {
  return (
    <StyledSidebar>
      <Image type="logo" />
      <Heading as="h1" $center>
        Goal tracker
      </Heading>
      <MainNav />
    </StyledSidebar>
  );
}
