import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { DEFAULT_SETTINGS, IDefaultSettings, MenuType, SETTINGS, ThemeType } from "../../consts";
import useLocalStorage from "../hooks/use-local-storage";

interface IAllSettings {
	settings: IDefaultSettings
	setSettings?: (settings: IDefaultSettings) => void
	update?: (newSettings: IDefaultSettings) => void
}

const Context = createContext<IAllSettings>({
	settings: DEFAULT_SETTINGS
});

type settingsKey = 'menu' | 'theme';

type SettingsType = number[] | ThemeType;

// export function useSettings<T extends keyof IDefaultSettings>(key: settingsKey) {
// 	const { settings, update } = useContext(Context);

// 	const change = useCallback((newSettings: MenuType | ThemeType) => {

// 		settings[key] = newSettings;

// 		update?.(settings);
// 	}, [key, update, settings]);

// 	return { setting: getSetting, change };
// }

export const useSettings = <T extends number[] | string,>(key: settingsKey) => {
	const { settings, update } = useContext(Context)

	const change = useCallback((newSettings: T) => {
		settings[key] = newSettings;

		update?.(settings)
	}, [key, update, settings]);

	return { setting: settings[key], change };
}

interface Props {
	children?: React.ReactNode
}

const SettingsProvider = ({ children }: Props) => {
	const [settings, setSettings] = useState<IDefaultSettings>(DEFAULT_SETTINGS);
	const { get, set } = useLocalStorage();

	useEffect(() => {
		const settings = get(SETTINGS);

		if (!settings) {
			set(SETTINGS, JSON.stringify(DEFAULT_SETTINGS));
		} else {
			setSettings(JSON.parse(settings));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const update = useCallback((newSettings: IDefaultSettings) => {
		set(SETTINGS, JSON.stringify(newSettings));

		setSettings({ ...newSettings });
	}, [get, set, setSettings]);

	return (
		<Context.Provider value={{ settings, update }}>
			{children}
		</Context.Provider>
	)
}

export default SettingsProvider;