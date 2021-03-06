import { IGrade } from '@api/model/acad-performance'
import { IndexedProperties } from '@utility-types/indexed-properties'

export type MenuType = number[]
export type ShortCutLinksType = number[]
export type ThemeType = string
export type GeneralType = {
    [key: string]: boolean
}

export interface IDefaultSettings {
    [key: string]: MenuType | ThemeType | GeneralType | ShortCutLinksType
}

export const SHORT_CUT_LINKS_LIMIT_SIZE = 4

export const DEFAULT_SETTINGS: IDefaultSettings = {
    menu: [0, 1, 2, 3, 4, 5, 6, 7],
    theme: 'light',
    general: {
        notifications: false,
    },
    shortCutLinks: [0, 1, 2, 3],
}

export const SETTINGS = 'settings'

export interface IColors extends IndexedProperties {
    green: IColorPalette
    lightGreen: IColorPalette
    blue: IColorPalette
    darkBlue: IColorPalette
    purple: IColorPalette
    pink: IColorPalette
    red: IColorPalette
    yellow: IColorPalette
    orange: IColorPalette
}

export interface IColorPalette {
    main: string
    transparent: string
    lighter: string
    darker: string
    littleDarker: string
    light: string
    dark: string
    darkTransparent: string
    lightTransparent: string
    reallyTransparent: string
    transparentAF: string
}

export const Colors: IColors = {
    green: {
        main: '#3cd288',
        transparent: 'rgba(64, 197, 197, .3)',
        lighter: '#3cd2d2',
        darker: '#258787',
        littleDarker: '#27b56e',
        light: '',
        dark: '#2a4f2f',
        reallyTransparent: '',
        darkTransparent: '#166c217a',
        transparentAF: '#3cd2881a',
        lightTransparent: '#9fe4a982',
    },
    lightGreen: {
        main: 'rgb(64, 197, 197)',
        transparent: 'rgba(64, 197, 197, .3)',
        lighter: '#3cd2d2',
        darker: '#258787',
        light: 'rgba(105, 205, 145, 0.5)',
        dark: '#216666',
        reallyTransparent: '',
        darkTransparent: '',
        transparentAF: '',
        lightTransparent: '',
        littleDarker: '',
    },
    blue: {
        main: 'rgb(95, 109, 236)',
        transparent: 'rgba(95, 109, 236, .3)',
        lighter: '#7884ec',
        darker: '#414ca8',
        light: '#4a93ff',
        dark: '#3f457f',
        reallyTransparent: '#6a8dff30',
        darkTransparent: '',
        transparentAF: '#6a8dff12',
        lightTransparent: '#567dff47',
        littleDarker: '#3737b3',
    },
    darkBlue: {
        main: '#9cbbff',
        transparent: 'rgba(95, 109, 236, .3)',
        lighter: '#7884ec',
        darker: '#414ca8',
        light: '',
        dark: '#4c73ca',
        reallyTransparent: '',
        darkTransparent: '',
        transparentAF: '',
        lightTransparent: '',
        littleDarker: '',
    },
    purple: {
        main: 'rgb(168, 95, 236)',
        transparent: 'rgba(168, 95, 236, .3)',
        lighter: '#d079ec',
        darker: '#824eb2',
        light: '#a87eee',
        dark: '#7e3798',
        reallyTransparent: '',
        darkTransparent: '',
        transparentAF: '#a85fec14',
        lightTransparent: '',
        littleDarker: '',
    },
    pink: {
        main: 'rgb(236, 95, 182)',
        transparent: 'rgba(236, 95, 182, .3)',
        lighter: '#e06cb4',
        darker: '#b24788',
        light: '',
        dark: '#842b62',
        reallyTransparent: '',
        darkTransparent: '',
        transparentAF: '#ec5fb617',
        lightTransparent: '',
        littleDarker: '',
    },
    red: {
        main: 'rgb(236, 95, 107)',
        transparent: 'rgba(236, 95, 107, .3)',
        lighter: '#f67b86',
        darker: '#b63c46',
        light: '',
        dark: '#632d32',
        littleDarker: '#b33b3b',
        reallyTransparent: '',
        darkTransparent: '#511a1ea3',
        transparentAF: '',
        lightTransparent: '#e2799273',
    },
    yellow: {
        main: '#ee9e44',
        transparent: 'rgba(236, 95, 107, .3)',
        lighter: '#f67b86',
        darker: '#b63c46',
        light: '',
        dark: '#632d32',
        reallyTransparent: '',
        darkTransparent: '#511a1ea3',
        transparentAF: '',
        lightTransparent: '',
        littleDarker: '',
    },
    orange: {
        main: '#ee9e44',
        transparent: '#ff520014',
        lighter: '#ee9e44',
        darker: '#ae4a1b',
        light: '',
        dark: '#e97944',
        reallyTransparent: '',
        darkTransparent: '#511a1ea3',
        transparentAF: '',
        lightTransparent: '#ffd7a67d',
        littleDarker: '#c75e1d',
    },
}

export interface IWeekDayName {
    full: string
    short: string
}

export interface IWeekDays {
    monday: IWeekDayName
    tuesday: IWeekDayName
    wednesday: IWeekDayName
    thursday: IWeekDayName
    friday: IWeekDayName
    saturday: IWeekDayName
    // sunday: IWeekDayName
}

export const WeekDays: IWeekDays = {
    monday: { full: '??????????????????????', short: '????' },
    tuesday: { full: '??????????????', short: '????' },
    wednesday: { full: '??????????', short: '????' },
    thursday: { full: '??????????????', short: '????' },
    friday: { full: '??????????????', short: '????' },
    saturday: { full: '??????????????', short: '????' },
    // sunday: { full: '??????????????????????', short: '????' },
}

export const ColorsByGrade = {
    ??????????????: Colors.green.main,
    ??????????????: Colors.green.main,
    ????????????: Colors.blue.main,
    ??????????????????????????????????: Colors.yellow.main,
    ??????????????????????????????????????: Colors.red.main,
    default: Colors.red.main,
}

export const WidthByGrade = {
    ??????????????: '100%',
    ??????????????: '100%',
    ????????????: '80%',
    ??????????????????????????????????: '60%',
    ??????????????????????????????????????: '40%',
    default: '40%',
}

export const GradeByScore: IGrade = {
    ??????????????: 5,
    ??????????????: 5,
    ????????????: 4,
    ??????????????????????????????????: 3,
    ??????????????????????????????????????: 2,
}

export const OLD_LK_URL = 'https://e.mospolytech.ru/old'

export const LastUpdateWhatsNew = '2022-05-19T10:30:00'

interface LetterColorMatch {
    [key: string]: keyof IColors
}

export const letterColorMatch: LetterColorMatch = {
    ??: 'lightGreen',
    ??: 'purple',
    ??: 'green',
    ??: 'pink',
    ??: 'purple',
    ??: 'blue',
    ??: 'red',
    ??: 'blue',
    ??: 'lightGreen',
    ??: 'pink',
    ??: 'lightGreen',
    ??: 'green',
    ??: 'red',
    ??: 'green',
    ??: 'purple',
    ??: 'blue',
    ??: 'darkBlue',
    ??: 'orange',
    ??: 'blue',
    ??: 'lightGreen',
    ??: 'blue',
    ??: 'green',
    ??: 'purple',
    ??: 'red',
    ??: 'red',
    ??: 'purple',
    ??: 'green',
    ??: 'blue',
    ??: 'red',
    ??: 'yellow',
    ??: 'green',
    A: 'lightGreen',
    B: 'purple',
    C: 'green',
    D: 'pink',
    E: 'purple',
    F: 'blue',
    G: 'red',
    H: 'blue',
    I: 'lightGreen',
    J: 'pink',
    K: 'lightGreen',
    L: 'green',
    M: 'red',
    N: 'green',
    O: 'purple',
    P: 'blue',
    Q: 'darkBlue',
    R: 'orange',
    S: 'blue',
    T: 'lightGreen',
    U: 'blue',
    V: 'green',
    W: 'purple',
    X: 'red',
    Y: 'red',
    Z: 'purple',
}
