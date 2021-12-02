import React from "react";
import { FiMenu } from "react-icons/fi";
import { menuModel } from "../../../../entities/menu";
import { Button } from "../../../../shared/ui/atoms";

const MenuButton = () => {
  const { isOpen } = menuModel.selectors.useMenu();
  return (
    <>
      <Button
        icon={<FiMenu />}
        onClick={() => menuModel.events.changeOpen({ isOpen: !isOpen })}
      />
    </>
  );
};

export default MenuButton;
