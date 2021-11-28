import React, { useMemo } from "react";
import { privateRoutes } from "../../../../../../app/routes/routes";
import getChosenRoutes from "../../../../../leftside-bar/lib/get-chosen-routes";
import LeftsideBarListWrapper from "../../../../../leftside-bar/ui/atoms/leftside-bar-list-wrapper";
import { useSettings } from "../../../../../../shared/lib/contexts/settings-context";
import { CustomizeLeftsideBarItem } from "../molecules";
import { ShortCutLinksType, SHORT_CUT_LINKS_LIMIT_SIZE } from "../../../../../../shared/consts";

const CustomizeLeftsideBarList = () => {
	const { setting, change } = useSettings<number[]>("menu");
	const { setting: shortCutMenu, change: shortCutChange } = useSettings<ShortCutLinksType>('shortCutLinks');

	const enabledLeftsideBarItems = getChosenRoutes(setting);
	const enabledShortCutMenu = useMemo(() => getChosenRoutes(shortCutMenu), [shortCutMenu]);

	const switchChosen = (id: number) => {
		if (enabledLeftsideBarItems[id]) {
			const newSettings = setting.filter(
				(settingId: number) => settingId !== id
			);

			change(newSettings);
		} else {
			setting.push(id);
			change([...setting]);
		}
	};

	const switchShortChosen = (id: number) => {
		console.log({ enabledShortCutMenu, id })
		if (enabledShortCutMenu[id]) {
			const newSettings = shortCutMenu.filter(
				(settingId: number) => settingId !== id
			);

			shortCutChange(newSettings);
		} else {
			if (shortCutMenu.length < SHORT_CUT_LINKS_LIMIT_SIZE) {
				shortCutMenu.push(id);
				shortCutChange([...shortCutMenu]);
			} else {
				console.log('wrong!!');
			}
		}
	}

	console.log(enabledShortCutMenu);
	return (
		<LeftsideBarListWrapper>
			{Object.values(privateRoutes).map((el, index) => {
				return (
					<CustomizeLeftsideBarItem
						{...el}
						key={index}
						chosen={!!enabledLeftsideBarItems[el.id]}
						shortItemChosen={!!enabledShortCutMenu[el.id]}
						switchShortChosen={switchShortChosen}
						switchMenuItem={switchChosen}
					/>
				);
			})}
		</LeftsideBarListWrapper>
	);
};

export default CustomizeLeftsideBarList;
