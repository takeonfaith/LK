import React, { useEffect } from "react";
import { ImCheckmark } from "react-icons/im";
import styled from "styled-components";
import useTheme from "../../lib/hooks/use-theme";
import Themes from "../colors";
import Loading from "./loading";

const SubmitButtonWrapper = styled.button<{
  isLoading: boolean;
  completed: boolean;
  isActive: boolean;
}>`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  opacity: ${(props) => (props.isLoading || !props.isActive ? 0.5 : 1)};
  background: var(--purpleAndBlueGrad);
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  border: none;
  cursor: pointer;
  background: var(--blue);

  @keyframes button-animation-in {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    50% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  @keyframes button-animation-out {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .inner-button {
    z-index: 1;

    .inner-button-success {
      animation: button-animation-in 2s forwards;
    }

    .inner-button-text {
      animation: button-animation-out 0.5s forwards;
    }
  }

  &::before {
    content: "";
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--green);
    width: ${(props) => (props.completed ? "2000px" : "0")};
    height: ${(props) => (props.completed ? "2000px" : "0")};
    border-radius: 100%;
    transition: 0.6s;
    z-index: 0;
  }

  .LoadingCircle {
    position: relative;
    transform: none;
    left: auto;
    top: auto;
    width: 30px;
    height: 30px;

    img {
      width: 30px;
      height: 30px;
    }
  }
`;

interface Props {
  text: string;
  action: () => void;
  isLoading: boolean;
  completed: boolean;
  setCompleted: (completed: boolean) => void;
  bottomMessage: string;
  isActive: boolean;
}

const SubmitButton = ({
  text,
  action,
  isLoading = false,
  completed = false,
  setCompleted,
  bottomMessage,
  isActive = true,
}: Props) => {
  //   const { openBottomMessage } = useModal();
  const { theme } = useTheme();

  useEffect(() => {
    if (completed) {
      // openBottomMessage(bottomMessage ?? undefined);
      setTimeout(() => {
        setCompleted(false);
      }, 2000);
    }
  }, [completed, setCompleted]);

  return (
    <SubmitButtonWrapper
      isLoading={isLoading}
      className="submit-button"
      completed={completed}
      isActive={isActive}
      onClick={action}
      theme={Themes[theme]}
    >
      <div className="inner-button">
        {completed ? (
          <div className="inner-button-success">
            <ImCheckmark /> Done
          </div>
        ) : !isLoading ? (
          <div className="inner-button-text">{text}</div>
        ) : (
          <Loading />
        )}
      </div>
    </SubmitButtonWrapper>
  );
};

export default SubmitButton;
