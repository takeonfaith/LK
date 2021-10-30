import { createStore } from "effector";
import { useStore } from "effector-react";
import { ToggleItem } from "../../../shared/ui/organisms/toggle-area";

const useSettings = () => {
	return useStore($settings)
}

const ThemeAction = (state: boolean) => console.log('Theme changed', state);
const UIAction = (state: boolean) => console.log('UI changed', state);

interface SettingsState {
	general: ToggleItem[]
	ui: ToggleItem[]
}

const initialState: SettingsState = {
	general: [],
	ui: [
		{ title: 'Change theme', state: false, action: ThemeAction },
		{ title: 'Ui', state: false, action: UIAction },
		{ title: 'Ui3', state: true }
	]
}

const $settings = createStore(initialState)

export const effects = {

}

export const selectors = {
	useSettings
}