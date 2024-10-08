import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

export function Modal({ children }: Props) {
  return (
    <Overlay>
      <Wrapper>{children}</Wrapper>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 1;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
`;
