import {
  IoCalendarOutline,
  IoHomeOutline,
  IoStatsChartOutline,
} from "react-icons/io5";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export function MainNav() {
  return (
    <nav>
      <Ul>
        <li>
          <StyledNavLink to="/">
            <IoHomeOutline /> Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/calendar">
            <IoCalendarOutline /> Calendar
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/expenses">
            <IoStatsChartOutline /> Expenses
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <HiOutlineCog6Tooth /> Settings
          </StyledNavLink>
        </li>
      </Ul>
    </nav>
  );
}

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-500);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  & svg {
    font-size: 2.4rem;
    margin-right: 10px;
    vertical-align: sub;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-secondary-10);
    border-radius: var(--border-radius-sm);
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-main);
    font-weight: bold;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
