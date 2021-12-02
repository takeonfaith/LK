import React from "react";
import { IRoute, privateRoutes } from "../../../app/routes/routes";
import { menuModel } from "../../../entities/menu";
import CloseMenuButton from "../../../features/leftside-bar/ui/molecules/close-menu-button";
import LeftsideBarList from "../../../features/leftside-bar/ui/organisms/leftside-bar-list";
import useResize from "../../lib/hooks/use-resize";
import LeftsideBarWrapper from "../atoms/leftside-bar-wrapper";
import Logo from "../atoms/logo";
import LocalSearch from "../molecules/local-search";

const LeftsideBar = () => {
  const { isOpen } = menuModel.selectors.useMenu();
  const { width } = useResize();

  return (
    <LeftsideBarWrapper isOpen={isOpen}>
      <div className="top-wrapper">
        <Logo />
        <LocalSearch
          whereToSearch={[
            Object.values(privateRoutes).map((el: IRoute) => el.title),
          ]}
          setResult={() => null}
          searchEngine={() => []}
        />
        <LeftsideBarList />
      </div>
      {width < 1000 && <CloseMenuButton />}
    </LeftsideBarWrapper>
  );
};

export default LeftsideBar;
