import React from "react";
import styled from "styled-components";
import LogoPicture from "../../images/logo.png";

const LogoWrapper = styled.img`
  width: 80%;
  filter: invert(var(--invert));
`;

const Logo = () => {
  return <LogoWrapper src={LogoPicture} alt="Logo" />;
};

export default Logo;
