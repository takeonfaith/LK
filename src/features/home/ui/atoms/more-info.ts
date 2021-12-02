import styled from "styled-components";

export const MoreInfoLink = styled.div`
  cursor: pointer;
  margin-top: 8px;

  display: flex;

  & > svg {
    stroke: var(--blue);
    filter: brightness(1.2);
  }

  & > span {
    margin-left: 5px;
    color: var(--blue);
    filter: brightness(1.2);
  }
`;

export const MoreInfoContent = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 1000px) {
    h2 {
      font-size: 0.9em;
    }

    .short-status {
      font-size: 0.8em;
    }
  }
`;
