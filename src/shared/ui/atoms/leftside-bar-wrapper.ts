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
  align-items: center;
  box-sizing: border-box;
  padding: 20px 15px;
  transition: 0.2s transform, width 0.3s;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  .leftside-bar-list {
    margin-top: 15px;
    overflow-y: auto;
    // box-shadow: 0 0 3px rgba(0, 0, 0, 0.342);
    background: var(--search2);
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 15px;
    border-radius: 12px;

    .leftside-bar-item {
      display: flex;
      align-items: center;
      font-weight: 700;
      width: 100%;
      justify-content: flex-start;
      padding: 10px 0;
      margin: 10px 0;
      cursor: pointer;
      position: relative;
      user-select: none;
      text-decoration: none;

      svg {
        width: 22px;
        height: 22px;
        margin-right: 7px;
      }
    }
  }
`;

export default LeftsideBarWrapper;
