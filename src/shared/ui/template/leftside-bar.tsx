import React from "react";
import { privateRoutes } from "../../../app/routes/routes";
import LeftsideBarWrapper from "../atoms/leftside-bar-wrapper";
import LeftsideBarItem from "../moleculas/leftside-bar-item";
import LeftsideBarList from "../organisms/leftside-bar-list";

const LeftsideBar = () => {
  return (
    <LeftsideBarWrapper>
      <LeftsideBarList />
    </LeftsideBarWrapper>
  );
};

export default LeftsideBar;
