import React from "react";
import { FiX } from "react-icons/fi";
import styled from "styled-components";
import { GreyColor, TextColor } from "../colors";
import Button from "./button";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  input {
    border: none;
    color: ${TextColor.secondary};
    outline: none;
    background: ${GreyColor.primary};
    height: 100%;
    width: 100%;
    padding: 10px;
    font-weight: bold;

    &::placeholder {
      font-weight: 500;
    }
  }

  button {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border-radius: 5px;
    background: ${GreyColor.secondary};

    svg {
      width: 10px;
      height: 10px;
    }
  }
`;

interface Props {
  placeholder?: string;
  type?: string;
  value: string;
  setValue: (value: string) => void;
}

const Input = ({
  value,
  setValue,
  placeholder = "Введите сюда",
  type = "text",
}: Props) => {
  return (
    <InputWrapper>
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
