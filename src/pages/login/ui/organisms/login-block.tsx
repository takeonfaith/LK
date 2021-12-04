import React, { useState } from "react";
import styled from "styled-components";
import { userModel } from "../../../../entities/user";
import useTheme from "../../../../shared/lib/hooks/use-theme";
import { Title } from "../../../../shared/ui/atoms";
import Input from "../../../../shared/ui/atoms/input";
import SubmitButton from "../../../../shared/ui/atoms/submit-button";
import Themes from "../../../../shared/ui/colors";

const LoginBlockWrapper = styled.div<{ theme: any }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  background: var(--theme);
  color: var(--text);
  box-shadow: 0 0 100px #0000004e;
  border-radius: 8px;
  padding: 20px;
  row-gap: 20px;

  @media (max-width: 1000px) {
    border-radius: var(--brSemi) var(--brSemi) 0 0;
    height: 50ch;
  }
`;

const LoginBlock = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const loginFunc = userModel.events.login;
  const { theme } = useTheme();

  return (
    <LoginBlockWrapper theme={Themes[theme]}>
      <Title size={2}>Вход в личный кабинет</Title>
      <Input
        value={login}
        setValue={setLogin}
        title="Логин"
        placeholder="Введите логин"
      />
      <Input
        value={password}
        setValue={setPassword}
        title="Пароль"
        placeholder="Введите пароль"
        type="password"
      />
      <SubmitButton
        text="Вход"
        action={() => loginFunc({ login, password })}
        isLoading={false}
        completed={false}
        setCompleted={() => null}
        isActive={!!password && !!login}
      />
    </LoginBlockWrapper>
  );
};

export default LoginBlock;
