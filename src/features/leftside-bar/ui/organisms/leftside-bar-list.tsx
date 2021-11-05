import React, { memo, useState } from "react";

import LeftsideBarDropdown from "./leftside-bar-dropdown";
import LeftsideBarItem from "../molecules/leftside-bar-item";
import { IRoutes, privateRoutes } from "../../../../app/routes/routes";
import LeftsideBarListWrapper from "../atoms/leftside-bar-list-wrapper";
import { useSettings } from "../../../../shared/lib/contexts/settings-context";

export function getEnabledRoutes(ids: number[]) {
	return ids.reduce((acc: IRoutes, id) => {
		const privateRoute = privateRoutes[id];

		if (privateRoute) {
			acc[id] = privateRoute
		}

		return acc;
	}, {});
}

const LeftsideBarList = memo(() => {
	const [currentPage, setCurrentPage] = useState(0);
	const { setting } = useSettings<number[]>('menu');


	return (
		<LeftsideBarListWrapper>
			{Object.values(getEnabledRoutes(setting as number[])).map(({ icon, id, title, path }) => {
				return (
					<LeftsideBarItem
						key={id}
						id={id}
						icon={icon}
						title={title}
						path={path}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				);
			})}
			<LeftsideBarDropdown
				heading={
					<LeftsideBarItem
						key={0}
						id={0}
						icon={privateRoutes[0].icon}
						title={'asdasd'}
						path={'/home'}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				}
				height={Object.values(privateRoutes).slice(0, 5).length * 54}
			>
				{Object.values(privateRoutes).slice(0, 5).map(({ icon, id, title, path }) => {
					return (
						<LeftsideBarItem
							key={id}
							id={id}
							icon={icon}
							title={title}
							path={path}
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
						/>
					);
				})}
			</LeftsideBarDropdown>
		</LeftsideBarListWrapper>
	);
});

export default LeftsideBarList;
