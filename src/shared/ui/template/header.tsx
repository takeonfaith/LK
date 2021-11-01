import React from "react";
import { FiSettings } from "react-icons/fi";
import { useModal } from "../../../features/modal";
import SettingsPage from "../../../pages/settings";
import Button from "../atoms/button";
import HeaderWrapper from "../atoms/header-wrapper";

const Header = () => {
  const { toggle } = useModal(<SettingsPage />);

  return (
    <HeaderWrapper>
      <h3>Home</h3>
      <Button text="Настройки" icon={<FiSettings />} onClick={toggle} />
    </HeaderWrapper>
  );
};

export default Header;
