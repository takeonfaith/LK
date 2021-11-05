import { Link } from "react-router-dom";
import styled from "styled-components";

const LeftsideBarItemWrapper = styled(Link)<{
  isCurrent: boolean;
  currentPage: number;
}>`
  position: relative;
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

  &::before {
    content: "";
    width: ${({ isCurrent }) => (isCurrent ? "3px" : 0)};
    height: 20px;
    display: block;
    position: absolute;
    top: 50%;
    left: -15px;
    transform: translateY(-50%);
    background: var(--blue);
    border-radius: 10px;
    transition: 0.2s width;
  }

  &:hover::before {
    width: 5px;
    background: var(--red);
  }

  svg,
  strong {
    color: ${({ isCurrent }) => (isCurrent ? "var(--blue)" : "var(--text)")};
  }
`;

export default LeftsideBarItemWrapper;
