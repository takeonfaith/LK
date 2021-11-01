import React from "react";
import LeftsideBarWrapper from "../atoms/leftside-bar-wrapper";
import Logo from "../atoms/logo";
import LeftsideBarList from "../organisms/leftside-bar-list";

const LeftsideBar = () => {
  return (
    <LeftsideBarWrapper>
      <Logo />
      <LeftsideBarList />
    </LeftsideBarWrapper>
  );
};

export default LeftsideBar;
