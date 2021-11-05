import React, { memo } from "react";
import { IconType } from "react-icons/lib";
import LeftsideBarItemWrapper from "../atoms/leftside-bar-item-wrapper";

interface Props {
  id: number;
  title: string;
  icon: IconType;
  path: string;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

const LeftsideBarItem = memo(
  ({ id, path, icon, title, currentPage, setCurrentPage }: Props) => {
    const showIcon = () => {
      const Icon = icon;
      return <Icon />;
    };

    return (
      <LeftsideBarItemWrapper
        to={path}
        className="leftside-bar-item"
        onClick={() => setCurrentPage(id)}
        currentPage={currentPage}
        isCurrent={id === currentPage}
      >
        {showIcon()}
        <strong>{title}</strong>
      </LeftsideBarItemWrapper>
    );
  }
);

export default LeftsideBarItem;
