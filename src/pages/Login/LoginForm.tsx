import styled from "styled-components";
import Button from "../../components/Button";
import { useState } from "react";
import useAuth from "./useAuth";

export default function LoginForm() {
  const [password, setPassword] = useState("1234");
  const [email, setEmail] = useState("adolfo@test.com");
  const { login } = useAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormVerticalRow>
        <Field>
          <Label>Email address</Label>
          <Input
            id="email"
            type="email"
            value={email}
            autoComplete="username"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field>
        <Field>
          <Label>Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Field>
        <Button> Log In</Button>
      </FormVerticalRow>
    </Form>
  );
}

const Form = styled.form`
  width: 400px;
  margin: auto;
  background-color: var(--color-grey-100);
  padding: 30px;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
`;

const FormVerticalRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;

  &:label {
    font-size: 1.4rem;
  }
`;

const Label = styled.label`
  font-size: 1.3rem;
`;
const Input = styled.input`
  border: 1px solid var(--color-grey-200);
  height: 3rem;
  border-radius: var(--border-radius-sm);
`;
