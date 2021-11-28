import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import {
	DEFAULT_SETTINGS,
	IDefaultSettings,
	MenuType,
	GeneralType,
	SETTINGS,
	ThemeType,
} from "../../consts";
import useLocalStorage from "../hooks/use-local-storage";

interface IAllSettings {
	settings: IDefaultSettings;
	update?: (newSettings: IDefaultSettings) => void;
}

const Context = createContext<IAllSettings>({
	settings: DEFAULT_SETTINGS,
});

type SettingsKey = "menu" | "theme" | "general" | "shortCutLinks";

type SettingsType = MenuType | ThemeType | GeneralType;

interface ISetting<T extends SettingsType> {
	setting: T;
	change: (newSettings: T) => void;
}

export const useSettings = <T extends SettingsType>(
	key: SettingsKey
): ISetting<T> => {
	const { settings, update } = useContext(Context);

	const change = useCallback(
		(newSettings: T) => {
			settings[key] = newSettings;

			update?.(settings);
		},
		[key, update, settings]
	);

	return { setting: settings[key] as T, change };
};

interface Props {
	children?: React.ReactNode;
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

	const update = useCallback(
		(newSettings: IDefaultSettings) => {
			set(SETTINGS, JSON.stringify(newSettings));

			setSettings({ ...newSettings });
		},
		[set, setSettings]
	);

	return (
		<Context.Provider value={{ settings, update }}>{children}</Context.Provider>
	);
};

export default SettingsProvider;
