import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function HighlightedText({ children }: Props) {
  return <b>{children}</b>;
}
