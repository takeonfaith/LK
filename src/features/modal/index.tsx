import React, {
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import useTheme from "../../shared/lib/hooks/use-theme";
import useOnClickOutside from "../../shared/lib/hooks/useOnClickOutside";
import Themes from "../../shared/ui/colors";

// Я тупить по тс-у
const Context = createContext<ModalContext>({
  isOpen: false,
  component: undefined,
  toggle: (event: any) => {},
});

interface ModalContext {
  isOpen: boolean;
  component: React.ReactElement<any, any> | undefined;
  toggle: (event: any) => void;
  setComponent?: React.Dispatch<
    React.SetStateAction<React.ReactElement<any, any> | undefined>
  >;
}
export interface IModal {
  isOpen: boolean;
  toggle: (event: any) => void;
}

export const useModal = (component: React.ReactElement<any, any>): IModal => {
  const [Component, setComponentInner] =
    useState<React.ReactElement<any, any>>(component);

  const {
    isOpen,
    toggle: coreToggle,
    setComponent,
  } = useContext<ModalContext>(Context);

  useEffect(() => {
    setComponentInner((_) => component);
  }, []);

  const toggle = useCallback(
    (event: any) => {
      coreToggle(event);
      setComponent?.((_) => Component);
    },
    [Component]
  );

  return {
    isOpen,
    toggle,
  };
};

export const useCoreModal = () => {
  const { isOpen, component, toggle } = useContext<ModalContext>(Context);

  return {
    isOpen,
    toggle,
    component,
  };
};

interface Props {
  children: JSX.Element;
}

export const ModalProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [component, setComponent] = useState<React.ReactElement<any, any>>();

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [setIsOpen]);

  return (
    <Context.Provider
      value={{
        isOpen,
        toggle,
        component,
        setComponent,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const ModalWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: 0.2s opacity, 0.2s visibility;
`;

const ModalContent = styled.div<{ isOpen: boolean }>`
  background: var(--theme);
  color: var(--text);
  padding: 20px;
  min-height: 50vh;
  border-radius: 29px;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: scale(${({ isOpen }) => (isOpen ? 1 : 0.95)});
  transition: 0.2s opacity, 0.2s transform;
`;

const Modal = memo(() => {
  const { isOpen, component: Component, toggle } = useCoreModal();
  const ref = useRef(null);
  const isValid = useMemo(() => isOpen && !!Component, [isOpen, Component]);
  const { theme } = useTheme();

  useOnClickOutside(ref, (event: any) => {
    if (isValid) toggle(event);
  });

  return (
    <ModalWrapper isOpen={isValid}>
      <ModalContent isOpen={isValid} ref={ref} theme={Themes[theme]}>
        {Component}
      </ModalContent>
    </ModalWrapper>
  );
});

export default Modal;
