import styled from "styled-components";

const LeftsideBarWrapper = styled.div`
  min-width: 235px;
  width: 235px;
  height: 100%;
  box-shadow: var(--light-box-shadow);
  background: var(--theme);
  z-index: 4;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
  box-sizing: border-box;
  padding: 20px 15px;
  transition: 0.2s transform, width 0.3s;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  @media (max-width: 1000px) {
    position: absolute;
    left: -100%;
  }
`;

export default LeftsideBarWrapper;
