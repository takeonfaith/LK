import React from "react";
import { privateRoutes } from "../../../../../../app/routes/routes";
import LeftsideBarListWrapper from "../../../../../../features/leftside-bar/ui/atoms/leftside-bar-list-wrapper";
import { CustomizeLeftsideBarItem } from "../molecules";

const CustomizeLeftsideBarList = () => {
  return (
    <LeftsideBarListWrapper>
      {privateRoutes.map((el, index) => {
        return <CustomizeLeftsideBarItem {...el} key={index} />;
      })}
    </LeftsideBarListWrapper>
  );
};

export default CustomizeLeftsideBarList;
