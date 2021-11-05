import React, { memo } from "react";
import { IconType } from "react-icons/lib";
import { CustomizeLeftsideBarWrapper } from "../atoms";
import AddToHomeButton from "../atoms/add-to-home-button";
import AddToMenuButton from "../atoms/add-to-menu-buttom";

interface Props {
  id: number;
  title: string;
  icon: IconType;
  path: string;
  chosen: boolean;
  switchMenuItem: (id: number) => void;
}

const CustomizeLeftsideBarItem = memo(
  ({ id, path, icon, title, chosen, switchMenuItem }: Props) => {
    const showIcon = () => {
      const Icon = icon;
      return <Icon />;
    };

    return (
      <CustomizeLeftsideBarWrapper
        chosen={chosen}
        onClick={() => switchMenuItem(id)}
      >
        <div className="icon-and-title">
          {showIcon()}
          <strong>{title}</strong>
        </div>
        <div className="buttons">
          <AddToHomeButton chosen={true} />
          <AddToMenuButton
            chosen={chosen}
            onClick={() => {
              switchMenuItem(id);
            }}
          />
        </div>
      </CustomizeLeftsideBarWrapper>
    );
  }
);

export default CustomizeLeftsideBarItem;
