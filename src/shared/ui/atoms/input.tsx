import React from "react";
import { FiX } from "react-icons/fi";
import styled from "styled-components";
import { GreyColor, TextColor, ThemeColor } from "../colors";
import Button from "./button";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;

  h5 {
    margin-bottom: 5px;
  }

  input {
    border: none;
    color: ${TextColor.primary};
    outline: none;
    background: ${GreyColor.primary};
    height: 100%;
    width: 100%;
    padding: 10px;
    font-weight: bold;
    border-radius: 7px;

    &::placeholder {
      font-weight: 500;
    }
  }

  button {
    position: absolute;
    bottom: -2px;
    right: 10px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border-radius: 5px;
    background: ${GreyColor.primary};

    svg {
      width: 10px;
      height: 10px;
    }
  }
`;

interface Props {
  value: string;
  setValue: (value: string) => void;
  title?: string;
  placeholder?: string;
  type?: string;
}

const Input = ({
  value,
  setValue,
  title,
  placeholder = "Введите сюда",
  type = "text",
}: Props) => {
  return (
    <InputWrapper>
      {!!title && <h5>{title}</h5>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {!!value.length && <Button icon={<FiX />} onClick={() => setValue("")} />}
    </InputWrapper>
  );
};

export default Input;
