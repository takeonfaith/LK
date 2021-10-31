import React, { useState } from "react";
import styled from "styled-components";
import { userModel } from "../../../../entities/user";
import Input from "../../../../shared/ui/atoms/input";
import SubmitButton from "../../../../shared/ui/atoms/submit-button";
import { ThemeColor } from "../../../../shared/ui/colors";

const LoginBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  background: ${ThemeColor.primary};
  box-shadow: 0 0 100px #9e9e9e4e;
  border-radius: 8px;
  padding: 20px;
  row-gap: 20px;
`;

const LoginBlock = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const loginFunc = userModel.events.login;

  return (
    <LoginBlockWrapper>
      <h2>Вход в личный кабинет</h2>
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
        bottomMessage={""}
        isActive={true}
      />
    </LoginBlockWrapper>
  );
};

export default LoginBlock;
