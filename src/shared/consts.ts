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

export const DEFAULT_API_LOAD_ERROR_MESSAGE =
    'Не удалось загрузить информацию. Проверьте соединение и попробуйте ещё раз'

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
    lightBlue: IColorPalette
    darkBlue: IColorPalette
    purple: IColorPalette
    pink: IColorPalette
    red: IColorPalette
    orange: IColorPalette
    grey: IColorPalette
    white: IColorPalette
}

export interface IColorPalette {
    dark3: string
    dark2: string
    dark1: string
    main: string
    light1: string
    light2: string
    light3: string
    transparent1: string
    transparent2: string
    transparent3: string
}

export const Colors: IColors = {
    green: {
        dark3: '#106c3f',
        dark2: '#188851',
        dark1: '#27b56e',
        main: '#3cd288',
        light1: '#59e5a0',
        light2: '#84ebb7',
        light3: '#a8ffd3',
        transparent1: '#a7ffd38a',
        transparent2: '#a7ffd324',
        transparent3: '#a7ffd30f',
    },
    lightGreen: {
        dark3: '#166363',
        dark2: '#207878',
        dark1: '#2e9b9b',
        main: '#40c5c5',
        light1: '#66dfdf',
        light2: '#8bf1f1',
        light3: '#a3fbfb',
        transparent1: '#a3fbfb99',
        transparent2: '#a3fbfb59',
        transparent3: '#a3fbfb29',
    },
    blue: {
        dark3: '#29349c',
        dark2: '#3742b1',
        dark1: '#4552c9',
        main: '#5f6dec',
        light1: '#7c88f5',
        light2: '#99a3ff',
        light3: '#bac0ff',
        transparent1: '#bac0ffa3',
        // aaaaaaaaaaaaaaaaaaaaaaaaaa i love maria))))for real what competetive adv
        transparent2: '#bac0ff42',
        transparent3: '#bac0ff17',
    },
    lightBlue: {
        dark3: '#5278cd',
        dark2: '#668de4',
        dark1: '#789ff6',
        main: '#9cbbff',
        light1: '#b9cfff',
        light2: '#ceddff',
        light3: '#e0e9ff',
        transparent1: '#e0e9ffba',
        transparent2: '#e0e9ff6b',
        transparent3: '#e0e9ff29',
    },
    darkBlue: {
        dark3: '#211d69',
        dark2: '#272279',
        dark1: '#2e2891',
        main: '#3831a5',
        light1: '#4038b5',
        light2: '#4e46c7',
        light3: '#5c54d9',
        transparent1: '#5c54d9e0',
        transparent2: '#5c54d9b5',
        transparent3: '#5c54d98c',
    },
    purple: {
        dark3: '#5b248d',
        dark2: '#7434af',
        dark1: '#8b4ac7',
        main: '#a85fec',
        light1: '#bd7cfa',
        light2: '#ce99ff',
        light3: '#dcb7ff',
        transparent1: '#dcb7ff99',
        transparent2: '#dcb7ff5c',
        transparent3: '#dcb7ff2b',
    },
    pink: {
        dark3: '#932066',
        dark2: '#a62b77',
        dark1: '#c34191',
        main: '#ec5fb6',
        light1: '#fd84cf',
        light2: '#ffa8de',
        light3: '#ffbce5',
        transparent1: '#ffbce59e',
        transparent2: '#ffbce561',
        transparent3: '#ffbce530',
    },
    red: {
        dark3: '#a3252f',
        dark2: '#bf3641',
        dark1: '#cf4b56',
        main: '#ec5f6b',
        light1: '#ff7b86',
        light2: '#ff98a1',
        light3: '#ffbbc1',
        transparent1: '#ffbbc194',
        transparent2: '#ffbbc159',
        transparent3: '#ffbbc133',
    },
    orange: {
        dark3: '#985e1d',
        dark2: '#a76821',
        dark1: '#ca8231',
        main: '#ee9e44',
        light1: '#fcb566',
        light2: '#ffc686',
        light3: '#ffd7ab',
        transparent1: '#ffd7ab99',
        transparent2: '#ffd7ab54',
        transparent3: '#ffd7ab1f',
    },
    grey: {
        dark3: '#353535',
        dark2: '#484848',
        dark1: '#646464',
        main: '#797979',
        light1: '#979797',
        light2: '#bdbdbd',
        light3: '#d5d5d5',
        transparent1: '#d5d5d5a3',
        transparent2: '#d5d5d559',
        transparent3: '#d5d5d521',
    },
    white: {
        dark3: '',
        dark2: '',
        dark1: '',
        main: '#fff',
        light1: '',
        light2: '',
        light3: '',
        transparent1: '',
        transparent2: '#80808014',
        transparent3: '#ffffff17',
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

export const ColorsByGrade: Record<keyof IGrade | 'default', string> = {
    Зачтено: Colors.green.main,
    'Не зачтено': Colors.red.main,
    Отлично: Colors.green.main,
    Хорошо: Colors.blue.main,
    Удовлетворительно: Colors.orange.main,
    Неудовлетворительно: Colors.red.main,
    'Не явился': Colors.red.main,
    default: Colors.red.main,
}

export const WidthByGrade: IGrade & { default: number } = {
    Зачтено: 100,
    'Не зачтено': 40,
    Отлично: 100,
    Хорошо: 80,
    Удовлетворительно: 60,
    Неудовлетворительно: 20,
    'Не явился': 20,
    default: 40,
}

export const GradeByScore: IGrade = {
    Зачтено: 5,
    'Не зачтено': 2,
    Отлично: 5,
    Хорошо: 4,
    Удовлетворительно: 3,
    'Не явился': 2,
    Неудовлетворительно: 2,
}

export const OLD_LK_URL = 'https://e.mospolytech.ru/old'

export const LastUpdateWhatsNew = '2022-12-22T10:00:00'

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
    '-': 'red',
    А: 'lightGreen',
    Б: 'purple',
    В: 'green',
    Г: 'pink',
    Д: 'blue',
    Е: 'blue',
    Ё: 'red',
    Ж: 'blue',
    З: 'lightGreen',
    И: 'pink',
    Й: 'lightBlue',
    К: 'lightGreen',
    Л: 'green',
    М: 'red',
    Н: 'green',
    О: 'purple',
    П: 'blue',
    Р: 'lightBlue',
    С: 'orange',
    Т: 'pink',
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
    Ю: 'orange',
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
    Q: 'lightBlue',
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

export const VALID_FORMATS = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'] as const
export type FileFormats = typeof VALID_FORMATS[number][]

export const MAX_FILE_SIZE = 11000000

export const SCREEN_IPHONE_SE = '376px'
export const SCREEN_IPHONE_12 = '391px'
export const SCREEN_IPHONE_XR = '415px'
export const SCREEN_IPAD_AIR = '821px'

/**
 * @constant
 * use when you need to hide some functionality on the production
 * @example
 * Component: () => isProduction ? PageIsNotReady : SettingsPage
 **/
export const isProduction = import.meta.env.MODE !== 'development'
