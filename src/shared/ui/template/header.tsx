import React from "react";
import { FiSettings } from "react-icons/fi";

import Button from "../atoms/button";
import { useModal } from "../../../features/modal";
import HeaderWrapper from "../atoms/header-wrapper";
import useOnClickOutside from "../../lib/hooks/useOnClickOutside";

const Header = () => {
	const { toggle } = useModal(<div>dssdsdfsd</div>)

	return <HeaderWrapper>
		<Button
			text='Настройки'
			icon={<FiSettings />}
			onClick={toggle}
		/>
	</HeaderWrapper>;
};

export default Header;
