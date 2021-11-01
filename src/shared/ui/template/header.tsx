import React, { memo } from "react";
import SettingsButton from "../../../features/header/ui/molecules/settings-button";
import { useRender } from "../../lib/hooks/use-render";
import HeaderWrapper from "../atoms/header-wrapper";

const Header = memo(() => {
	useRender('header');
	return (
		<HeaderWrapper>
			<h3>Home</h3>
			<SettingsButton />
		</HeaderWrapper>
	);
});

export default Header;
