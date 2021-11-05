export type MenuType = number[];
export type ThemeType = string;
export type GeneralType = {
  [key: string]: boolean;
};

export interface IDefaultSettings {
  [key: string]: MenuType | ThemeType | GeneralType;
}

export const DEFAULT_SETTINGS: IDefaultSettings = {
  menu: [0, 1, 2, 3, 4, 5, 6, 7],
  theme: "light",
  general: {
    notifications: false,
  },
};

export const SETTINGS = "settings";
