import { IGrade } from '@api/model/acad-performance'
import { MessageType } from '@ui/types'
import { IconType } from 'react-icons'
import { FiAlertCircle, FiCheck, FiInfo, FiXCircle } from 'react-icons/fi'
import { HiOutlineLightBulb } from 'react-icons/hi'

export type MenuType = string[]
export type ShortCutLinksType = number[]
export type ThemeType = 'dark' | 'light'
export type GeneralType = {
    [key: string]: boolean
}

export interface IDefaultSettings {
    [key: string]: MenuType | ThemeType | GeneralType | ShortCutLinksType
}

export const SHORT_CUT_LINKS_LIMIT_SIZE = 4

export const ADDITIONAL_MENU_ITEMS_LIMIT_SIZE = 3

export const REQUIRED_LEFTSIDE_BAR_CONFIG = ['home', 'settings', 'all']
export const REQUIRED_TEACHER_LEFTSIDE_BAR_CONFIG = ['home', 'settings', 'download-agreements', 'all']

export const DEFAULT_SETTINGS: IDefaultSettings = {
    menu: REQUIRED_LEFTSIDE_BAR_CONFIG,
    theme: 'light',
    general: {
        notifications: false,
    },
    shortCutLinks: [0, 1, 2, 3],
}

export const UNION_ORGANIZATION = 'https://lk.eseur.ru/signup'
export const RECEPTION_COMMISSION = 'https://old.mospolytech.ru/index.php?id=3428'

export const SETTINGS = 'settings'

export interface IColors {
    green: IColorPalette
    lightGreen: IColorPalette
    blue: IColorPalette
    darkBlue: IColorPalette
    purple: IColorPalette
    pink: IColorPalette
    red: IColorPalette
    yellow: IColorPalette
    orange: IColorPalette
    grey: IColorPalette
    white: IColorPalette
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
        transparentAF: '#ec5f6b14',
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
        light: '#ffd19d',
        dark: '#e97944',
        reallyTransparent: '',
        darkTransparent: '#511a1ea3',
        transparentAF: '#ee9e440f',
        lightTransparent: '#ffd7a67d',
        littleDarker: '#c75e1d',
    },
    grey: {
        main: '#797979',
        transparent: '',
        lighter: '',
        darker: '',
        light: '',
        dark: '',
        reallyTransparent: '',
        darkTransparent: '',
        transparentAF: '#9494940d',
        lightTransparent: '#80808014',
        littleDarker: '',
    },
    white: {
        main: '#fff',
        transparent: '',
        lighter: '',
        darker: '',
        light: '',
        dark: '',
        reallyTransparent: '',
        darkTransparent: '',
        transparentAF: '#ffffff17',
        lightTransparent: '#80808014',
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

export const LastUpdateWhatsNew = '2022-05-19T10:30:00'

type MessageTypeObj = {
    [key in MessageType]: {
        icon: IconType
        color: keyof IColors
        title: string
    }
}

export const messageType: MessageTypeObj = {
    info: {
        icon: FiInfo,
        color: 'blue',
        title: 'Информация',
    },
    alert: {
        icon: FiAlertCircle,
        color: 'orange',
        title: 'Внимание!',
    },
    failure: {
        icon: FiXCircle,
        color: 'red',
        title: 'Ошибка',
    },
    success: {
        icon: FiCheck,
        color: 'green',
        title: 'Успешно',
    },
    tip: {
        icon: HiOutlineLightBulb,
        color: 'grey',
        title: 'Подсказка',
    },
    hint: {
        icon: HiOutlineLightBulb,
        color: 'white',
        title: 'Подсказка',
    },
}

interface LetterColorMatch {
    [key: string]: keyof IColors
}

export const letterColorMatch: LetterColorMatch = {
    А: 'lightGreen',
    Б: 'purple',
    В: 'green',
    Г: 'pink',
    Д: 'purple',
    Е: 'blue',
    Ё: 'red',
    Ж: 'blue',
    З: 'lightGreen',
    И: 'pink',
    К: 'lightGreen',
    Л: 'green',
    М: 'red',
    Н: 'green',
    О: 'purple',
    П: 'blue',
    Р: 'darkBlue',
    С: 'orange',
    Т: 'blue',
    У: 'lightGreen',
    Ф: 'blue',
    Х: 'green',
    Ч: 'purple',
    Ц: 'green',
    Ш: 'red',
    Щ: 'red',
    Ъ: 'purple',
    Ы: 'green',
    Ь: 'blue',
    Э: 'red',
    Ю: 'yellow',
    Я: 'green',
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

export const VALID_FORMATS = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf']

export const MAX_FILE_SIZE = 11000000

/**
 * @constant
 * use when you need to hide some functionality on the production
 * @example
 * Component: () => isProduction ? PageIsNotReady : SettingsPage
 **/
export const isProduction = (import.meta.env.VITE_BUILD_MODE as string)?.trimEnd() === 'PRODUCTION'
