import styled from "styled-components";

export const Container = styled.div`
  border-radius: 50%;

  width: 160px;
  height: 160px;

  overflow: hidden;

  margin-right: 32px;

  @media (max-width: 1000px) {
    min-width: 80px;
    width: 80px;
    height: 80px;
    margin-right: 15px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
`;
