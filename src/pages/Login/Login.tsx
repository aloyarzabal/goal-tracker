import styled from "styled-components";
import Heading from "../../components/Heading";
import LoginForm from "./LoginForm";
import Logo from "../../components/Logo";

export function Login() {
  return (
    <LoginWrapper>
      <div>
        <Logo />
        <Heading as="h3" $center>
          Log in to your account
        </Heading>
      </div>
      <LoginForm />
    </LoginWrapper>
  );
}

const LoginWrapper = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
`;
