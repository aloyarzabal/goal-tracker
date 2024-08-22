import styled, { css } from "styled-components";

const Heading = styled.h1<{ $center?: boolean }>`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 2rem;
      font-weight: 200;
      text-transform: uppercase;
      color: var(--color-secondary-75);
      letter-spacing: -1px;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

  line-height: 1.4;
  margin-bottom: 40px;
  text-align: ${(props) => (props.$center ? "center" : "none")};
`;

export default Heading;
