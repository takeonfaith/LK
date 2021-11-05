import styled from "styled-components";

const LeftsideBarItemWrapper = styled.div<{
	chosen: boolean;
}>`
  position: relative;
  display: flex;
  justify-content: space-between;
  position: relative;
  display: flex;
  align-items: center;
  font-weight: 700;
  width: 100%;
  padding: 10px 0;
  cursor: pointer;
  position: relative;
  user-select: none;
  text-decoration: none;

  .icon-and-title {
    display: flex;
    align-items: center;
  }

  svg {
    width: 22px;
    height: 22px;
    margin-right: 7px;
  }

  .buttons {
    display: flex;
    align-items: center;
    column-gap: 5px;

    svg {
      margin: 0;
    }
  }

  &:hover::before {
    width: 5px;
    background: var(--red);
  }

  svg,
  strong {
    color: ${({ chosen }) => (chosen ? "var(--blue)" : "var(--text)")};
  }
`;

export default LeftsideBarItemWrapper;
