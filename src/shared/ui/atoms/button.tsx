import React from "react";
import styled from "styled-components";
import { GreyColor, TextColor } from "../colors";

const ButtonWrapper = styled.button<{ text: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: ${GreyColor.primary};
  outline: none;
  color: ${TextColor.secondary};
  padding: 5px;
  /* width: 100%; */
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;

  svg {
    margin-right: ${({ text }) => (text ? "7px" : "0")};
    width: 15px;
    height: 15px;
  }
`;

interface Props {
  icon: JSX.Element;
  text?: string;
  onClick: () => void;
}

const Button = ({ icon, text, onClick }: Props) => {
  return (
    <ButtonWrapper text={!!text} onClick={onClick}>
      {!!icon && icon}
      <span>{text}</span>
    </ButtonWrapper>
  );
};

export default Button;
