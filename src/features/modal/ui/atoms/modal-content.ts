import styled from "styled-components";

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

export default ModalContent;