import { Link } from "react-router-dom";
import styled from "styled-components";

export const ShortCutList = styled.ul`
  display: flex;
  width: 100%;
  list-style-type: none;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ShortCutItem = styled.li`
  min-width: 150px;
  max-width: 250px;
  width: 15%;
  height: fit-content;

  transition: 0.2s;
  cursor: pointer;

  @media (max-width: 1000px) {
    width: calc(50% - 5px);
    max-width: none;
  }
`;

export const ShortCutLinkContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 130px;

  border-radius: var(--brSemi);
  box-shadow: var(--leftside-bar-shadow);

  color: white;
  text-decoration: none;

  & > svg {
    width: 50px;
    height: 50px;
    margin-bottom: 5px;
  }
`;
