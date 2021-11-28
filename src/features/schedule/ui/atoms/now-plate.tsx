import React from "react";
import styled from "styled-components";

const NowPlateWrapper = styled.div`
  padding: 2px 10px;
  width: fit-content;
  border-radius: 20px;
  color: var(--text-oppisite);
  background: var(--almostTransparent);
  font-size: 0.7em;
  font-weight: bold;
`;

const NowPlate = () => {
  return <NowPlateWrapper>Сейчас</NowPlateWrapper>;
};

export default NowPlate;
