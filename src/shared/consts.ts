export type MenuType = number[];
export type ShortCutLinksType = number[];
export type ThemeType = string;
export type GeneralType = {
	[key: string]: boolean;
};

export interface IDefaultSettings {
	[key: string]: MenuType | ThemeType | GeneralType | ShortCutLinksType;
}

export const SHORT_CUT_LINKS_LIMIT_SIZE = 4;

export const DEFAULT_SETTINGS: IDefaultSettings = {
	menu: [0, 1, 2, 3, 4, 5, 6, 7],
	theme: "light",
	general: {
		notifications: false,
	},
	shortCutLinks: [0, 1, 2, 3],
};

export const SETTINGS = "settings";

interface IColors {
	[key: string]: IColorPalette
}

interface IColorPalette {
	main: string;
	transparent: string;
	lighter: string;
	darker: string;
	light: string;
	dark: string;
}

export const Colors: IColors = {
	lightGreen: {
		main: "rgb(64, 197, 197)",
		transparent: "rgba(64, 197, 197, .3)",
		lighter: "#3cd2d2",
		darker: "#258787",
		light: "",
		dark: "#216666",
	},
	blue: {
		main: "rgb(95, 109, 236)",
		transparent: "rgba(95, 109, 236, .3)",
		lighter: "#7884ec",
		darker: "#414ca8",
		light: "",
		dark: "#3f457f",
	},
	purple: {
		main: "rgb(168, 95, 236)",
		transparent: "rgba(168, 95, 236, .3)",
		lighter: "#d079ec",
		darker: "#824eb2",
		light: "",
		dark: "",
	},
	pink: {
		main: "rgb(236, 95, 182)",
		transparent: "rgba(236, 95, 182, .3)",
		lighter: "#e06cb4",
		darker: "#b24788",
		light: "",
		dark: "#842b62",
	},
	red: {
		main: "rgb(236, 95, 107)",
		transparent: "rgba(236, 95, 107, .3)",
		lighter: "#f67b86",
		darker: "#b63c46",
		light: "",
		dark: "#a0363f",
	},
};

export interface IWeekDayName {
	full: string;
	short: string;
}

export interface IWeekDays {
	monday: IWeekDayName;
	tuesday: IWeekDayName;
	wednesday: IWeekDayName;
	thursday: IWeekDayName;
	friday: IWeekDayName;
	saturday: IWeekDayName;
}

export const WeekDays: IWeekDays = {
	monday: { full: "Понедельник", short: "Пн" },
	tuesday: { full: "Вторник", short: "Вт" },
	wednesday: { full: "Среда", short: "Ср" },
	thursday: { full: "Четверг", short: "Чт" },
	friday: { full: "Пятница", short: "Пт" },
	saturday: { full: "Суббота", short: "Сб" },
};
