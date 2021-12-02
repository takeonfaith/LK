import React, { memo } from "react";
import { IconType } from "react-icons/lib";
import { menuModel } from "../../../../entities/menu";
import LeftsideBarItemWrapper from "../atoms/leftside-bar-item-wrapper";

interface Props {
  id: number;
  title: string;
  icon: IconType;
  path: string;
  isCurrent: boolean;
}

const LeftsideBarItem = memo(
  ({ id, path, icon: Icon, title, isCurrent }: Props) => {
    const { isOpen } = menuModel.selectors.useMenu();
    return (
      <LeftsideBarItemWrapper
        to={path}
        className="leftside-bar-item"
        isCurrent={isCurrent}
        onClick={() => menuModel.events.changeOpen({ isOpen: false })}
      >
        <Icon />
        <strong>{title}</strong>
      </LeftsideBarItemWrapper>
    );
  }
);

export default LeftsideBarItem;
