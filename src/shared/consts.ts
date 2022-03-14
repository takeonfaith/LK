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

interface IColors extends IndexedProperties {
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
        darkTransparent: '#166c217a',
        lightTransparent: '#9fe4a982',
    },
    lightGreen: {
        main: 'rgb(64, 197, 197)',
        transparent: 'rgba(64, 197, 197, .3)',
        lighter: '#3cd2d2',
        darker: '#258787',
        light: '',
        dark: '#216666',
        darkTransparent: '',
        lightTransparent: '',
        littleDarker: '',
    },
    blue: {
        main: 'rgb(95, 109, 236)',
        transparent: 'rgba(95, 109, 236, .3)',
        lighter: '#7884ec',
        darker: '#414ca8',
        light: '',
        dark: '#3f457f',
        darkTransparent: '',
        lightTransparent: '',
        littleDarker: '',
    },
    darkBlue: {
        main: '#9cbbff',
        transparent: 'rgba(95, 109, 236, .3)',
        lighter: '#7884ec',
        darker: '#414ca8',
        light: '',
        dark: '#4c73ca',
        darkTransparent: '',
        lightTransparent: '',
        littleDarker: '',
    },
    purple: {
        main: 'rgb(168, 95, 236)',
        transparent: 'rgba(168, 95, 236, .3)',
        lighter: '#d079ec',
        darker: '#824eb2',
        light: '',
        dark: '#7e3798',
        darkTransparent: '',
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
        darkTransparent: '',
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
        darkTransparent: '#511a1ea3',
        lightTransparent: '#e2799273',
    },
    yellow: {
        main: '#ee9e44',
        transparent: 'rgba(236, 95, 107, .3)',
        lighter: '#f67b86',
        darker: '#b63c46',
        light: '',
        dark: '#632d32',
        darkTransparent: '#511a1ea3',
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
        darkTransparent: '#511a1ea3',
        lightTransparent: '',
        littleDarker: '',
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
    monday: { full: 'Понедельник', short: 'Пн' },
    tuesday: { full: 'Вторник', short: 'Вт' },
    wednesday: { full: 'Среда', short: 'Ср' },
    thursday: { full: 'Четверг', short: 'Чт' },
    friday: { full: 'Пятница', short: 'Пт' },
    saturday: { full: 'Суббота', short: 'Сб' },
    // sunday: { full: 'Воскресенье', short: 'Вс' },
}

export const ColorsByGrade = {
    Зачтено: Colors.green.main,
    Отлично: Colors.green.main,
    Хорошо: Colors.blue.main,
    Удовлетворительно: Colors.yellow.main,
    Неудовлетворительно: Colors.red.main,
    default: Colors.red.main,
}

export const WidthByGrade = {
    Зачтено: '100%',
    Отлично: '100%',
    Хорошо: '80%',
    Удовлетворительно: '60%',
    Неудовлетворительно: '40%',
    default: '40%',
}

export const GradeByScore: IGrade = {
    Зачтено: 5,
    Отлично: 5,
    Хорошо: 4,
    Удовлетворительно: 3,
    Неудовлетворительно: 2,
}

export const OLD_LK_URL = 'https://e.mospolytech.ru/old'
