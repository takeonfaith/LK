import React, { useState } from "react";

import LeftsideBarDropdown from "./leftside-bar-dropdown";
import LeftsideBarItem from "../molecules/leftside-bar-item";
import { privateRoutes } from "../../../../app/routes/routes";

const LeftsideBarList = () => {
	const [currentPage, setCurrentPage] = useState(0);

	return (
		<div className="leftside-bar-list">
			{Object.values(privateRoutes).map(({ icon, id, title, path }) => {
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
		</div>
	);
};

export default LeftsideBarList;
