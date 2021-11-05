
export type MenuType = number[];
export type ThemeType = string;

export interface IDefaultSettings {
	[key: string]: number[] | string
}

export const DEFAULT_SETTINGS: IDefaultSettings = {
	menu: [0, 1, 2, 3, 4, 5, 6, 7],
	theme: 'light'
};

export const SETTINGS = 'settings';
export const EMPTY_SETTINGS = '{}';