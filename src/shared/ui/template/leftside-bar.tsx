import React from "react";
import { IRoute, privateRoutes } from "../../../app/routes/routes";
import LeftsideBarList from "../../../features/leftside-bar/ui/organisms/leftside-bar-list";
import LeftsideBarWrapper from "../atoms/leftside-bar-wrapper";
import Logo from "../atoms/logo";
import LocalSearch from "../molecules/local-search";

const LeftsideBar = () => {
  return (
    <LeftsideBarWrapper>
      <Logo />
      <LocalSearch
        whereToSearch={[
          Object.values(privateRoutes).map((el: IRoute) => el.title),
        ]}
        setResult={() => null}
        searchEngine={() => []}
      />
      <LeftsideBarList />
    </LeftsideBarWrapper>
  );
};

export default LeftsideBar;
