import React, { useState } from "react";
import Login from "../../../../components/Login";
import { Card, Divider } from "antd";
import Register from "../../../../components/Register";
import styled from "@emotion/styled";
import logo from "assets/logo.svg";
import left from "assets/left.svg";
import right from "assets/right.svg";
import { LongButton } from "../../../../components/Button";
import { useAuth } from "../../../../context/auth-context";

interface RegisterProps {
  username: string;
  password: string;
  cpassword: string;
}

interface LoginProps {
  username: string;
  password: string;
}
const UnAuthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(true);
  const { register, login } = useAuth();
  const [error, setError] = useState<Error | null>(null);
  const loginHandler = async (value: LoginProps) => {
    await login(value);
  };
  const registerHandler = async (values: RegisterProps) => {
    await register(values);
  };
  const switchHandler = () => setIsRegister(!isRegister);
  return (
    <Container>
      <Header />
      <Background />
      <ShadowCard>
        <Title>{isRegister ? "Login" : "Register"}</Title>
        {error ? JSON.stringify(error.message) : null}
        {isRegister ? (
          <Login login={loginHandler} onError={setError} />
        ) : (
          <Register register={registerHandler} onError={setError} />
        )}
        <Divider />
        <LongButton type={"link"} onClick={switchHandler}>
          {isRegister
            ? "No account? Register an account!"
            : "Already have an account? Login!"}
        </LongButton>
      </ShadowCard>
    </Container>
  );
};

export default UnAuthenticatedApp;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left bottom, right bottom;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem),
    calc(((100vw - 40rem) / 2) - 3.2rem), cover;
  background-image: url(${left}), url(${right});
`;

const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`;
const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
