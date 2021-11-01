import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 45px;
  background: var(--primary-background);
  box-shadow: var(--header-box-shadow);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;

  h3 {
    color: var(--text);
  }
`;

export default HeaderWrapper;
