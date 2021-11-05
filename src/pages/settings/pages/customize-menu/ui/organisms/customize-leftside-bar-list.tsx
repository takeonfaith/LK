import React from "react";
import { privateRoutes } from "../../../../../../app/routes/routes";
import LeftsideBarListWrapper from "../../../../../../features/leftside-bar/ui/atoms/leftside-bar-list-wrapper";
import { getEnabledRoutes } from "../../../../../../features/leftside-bar/ui/organisms/leftside-bar-list";
import { useSettings } from "../../../../../../shared/lib/contexts/settings-context";
import { CustomizeLeftsideBarItem } from "../molecules";

const CustomizeLeftsideBarList = () => {
	const { setting, change } = useSettings<number[]>('menu');

	const enabledLeftsideBarItems = getEnabledRoutes(setting as number[]);

	const switchChosen = (id: number) => {
		if (enabledLeftsideBarItems[id]) {
			const newSettings = (setting as number[]).filter((settingId: number) => settingId !== id);

			change(newSettings);
		} else {
			(setting as number[]).push(id);
			change([...(setting as number[])]);
		}

	}
	return (
		<LeftsideBarListWrapper>
			{Object.values(privateRoutes).map((el, index) => {
				return <CustomizeLeftsideBarItem {...el} key={index} chosen={!!enabledLeftsideBarItems[el.id]} switchMenuItem={switchChosen} />;
			})}
		</LeftsideBarListWrapper>
	);
};

export default CustomizeLeftsideBarList;
