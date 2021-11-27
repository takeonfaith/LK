import React, { memo } from "react";
import styled from "styled-components";
import useTheme from "../../lib/hooks/use-theme";
import Themes from "../colors";

const ButtonWrapper = styled.button<{
  theme: string;
  text: boolean;
  isChosen: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  color: var(--text);
  background: ${({ isChosen }) => (isChosen ? "var(--blue)" : "var(--search)")};
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.2s transform;

  &:active {
    transform: scale(0.95);
  }

  svg {
    margin-right: ${({ text }) => (text ? "7px" : "0")};
    width: 15px;
    height: 15px;
  }
`;

interface Props {
  icon: JSX.Element;
  text?: string;
  onClick: (event: any) => void;
  isChosen?: boolean;
}

const Button = memo(({ icon, text, onClick, isChosen = false }: Props) => {
  const { theme } = useTheme();
  return (
    <ButtonWrapper
      text={!!text}
      onClick={onClick}
      theme={Themes[theme]}
      isChosen={isChosen}
    >
      {!!icon && icon}
      <span>{text}</span>
    </ButtonWrapper>
  );
});

export default Button;
