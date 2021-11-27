export type MenuType = number[];
export type ThemeType = string;
export type GeneralType = {
	[key: string]: boolean;
};

export interface IDefaultSettings {
	[key: string]: MenuType | ThemeType | GeneralType;
}

export const SHORT_CUT_LINKS_LIMIT_SIZE = 4;

export const DEFAULT_SETTINGS: IDefaultSettings = {
	menu: [0, 1, 2, 3, 4, 5, 6, 7],
	theme: "light",
	general: {
		notifications: false,
	},
	shortCutLinks: [0, 1, 2, 3]
};

export const SETTINGS = "settings";

export const Colors = {
	lightGreen: {
		primary: "rgb(64, 197, 197)",
		secondary: "rgba(64, 197, 197, .3)",
		tertiary: "",
	},
	blue: {
		primary: "rgb(95, 109, 236)",
		secondary: "rgba(95, 109, 236, .3)",
		tertiary: "",
	},
	purple: {
		primary: "rgb(168, 95, 236)",
		secondary: "rgba(168, 95, 236, .3)",
		tertiary: "rgb(168, 95, 236)",
	},
	pink: {
		primary: "rgb(236, 95, 182)",
		secondary: "rgba(236, 95, 182, .3)",
		tertiary: "",
	},
	red: {
		primary: "rgb(236, 95, 107)",
		secondary: "rgba(236, 95, 107, .3)",
		tertiary: "",
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
