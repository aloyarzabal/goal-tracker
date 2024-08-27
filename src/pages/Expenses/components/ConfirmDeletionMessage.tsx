import styled from "styled-components";
import Button from "../../../components/Button";
import Heading from "../../../components/Heading";

interface Props {
  onConfirm: () => void;
  onCancel: () => void;
  title: string;
}

export function ConfirmDeletionMessage({ onConfirm, onCancel, title }: Props) {
  return (
    <Wrapper>
      <Heading as="h3">Delete {title}</Heading>{" "}
      <p>Are you sure you want to delete this {title}?</p>
      <ButtonsWrapper>
        <div>
          <Button $secondary onClick={onCancel}>
            Cancel
          </Button>
          <Button onClick={onConfirm}>Delete</Button>
        </div>
      </ButtonsWrapper>
    </Wrapper>
  );
}

const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  & div {
    grid-column-start: 3;
    display: flex;
    gap: 1.5rem;
  }
`;

const Wrapper = styled.div`
  background: white;
  padding: 4rem 3.4rem;
  width: 40rem;
  border-radius: var(--border-radius-sm);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin: auto;
`;

const Upper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
`;
