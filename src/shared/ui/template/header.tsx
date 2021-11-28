import React, { memo } from "react";
import SettingsButton from "../../../features/header/ui/molecules/settings-button";
import useCurrentPage from "../../lib/hooks/use-current-page";
import { useRender } from "../../lib/hooks/use-render";
import HeaderWrapper from "../atoms/header-wrapper";

const Header = memo(() => {
  useRender("header");
  const { title } = useCurrentPage();
  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      <SettingsButton />
    </HeaderWrapper>
  );
});

export default Header;
