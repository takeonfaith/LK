import React, { useState, useCallback } from "react";
import { settingsModel } from "../../entities/settings";
import Slider from "../../features/slider/molecules/slider";
import SwitchToggle from "../../shared/ui/molecules/switch-toggle";
import ToggleArea, { ToggleItem } from "../../shared/ui/organisms/toggle-area";

const pages = ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5"];


const HomePage = () => {
	const [toggles, setToggles] = useState<ToggleItem[]>(
		settingsModel.selectors.useSettings().ui
	);

	console.log(settingsModel.selectors.useSettings().ui)

	const handleChange = useCallback((id: number) => {
		toggles[id].state = !toggles[id].state;

		setToggles([...toggles]);

	}, [toggles])

	return (
		<div>
			home
			<ToggleArea
				title={'User'}
				toggles={toggles}
				onChange={handleChange}
			/>
			<Slider pages={pages} />
		</div>
	);
};

export default HomePage;
