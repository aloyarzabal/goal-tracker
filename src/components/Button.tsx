import styled, { css } from "styled-components";

type Position = "right" | "center";

const variations = {
  primary: css`
    background-color: var(--color-main);
    color: var(--color-grey-0);

    &:hover {
      background-color: var(--color-main-75);
    }
  `,
  secondary: css`
    background-color: var(--color-gray-0);
    color: inherit;
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-100);
    }
  `,
};

const position = {
  right: css`
    margin-left: auto;
  `,

  center: css`
    margin: auto;
  `,
};

const Button = styled.button<{ $secondary?: boolean; $position?: Position }>`
  border-radius: var(--border-radius-sm);
  padding: 1.5rem;
  transition: transform 0.1s ease;
  max-width: 300px;

  ${(props) =>
    props.$secondary ? variations["secondary"] : variations["primary"]};

  ${(props) => props.$position && position[props.$position]};
`;

export default Button;
