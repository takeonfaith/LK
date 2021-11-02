import React from "react";
import styled from "styled-components";
import LoginBlock from "./ui/organisms/login-block";

const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--theme);
`;

const LoginPage = () => {
  return (
    <LoginWrapper>
      <LoginBlock />
    </LoginWrapper>
  );
};

export default LoginPage;
