import { $api } from '@api/config'
import emulateRequest from '@shared/lib/emulate-request'
import token from '@utils/token'
import { RawScheduleResponse, RawTeacherScheduleResponse } from './model'

const MOCK = {
    Monday: {
        lessons: [
            {
                name: 'Проектная деятельность (Зачет)',
                timeInterval: '9:00 - 10:30',
                place: 'Обучение LMS',
                rooms: [],
                teachers: [''],
                dateInterval: '05 Июн',
                link: 'https://online.mospolytech.ru/',
            },
            {
                name: 'Управление проектами (Практика)',
                timeInterval: '10:40 - 12:10',
                place: 'Прянишникова',
                rooms: ['ПД_1'],
                teachers: [''],
                dateInterval: '06 Фев - 03 Июн',
                link: null,
            },
            {
                name: 'Управление проектами (Зачет)',
                timeInterval: '10:40 - 12:10',
                place: 'Обучение LMS',
                rooms: [],
                teachers: [''],
                dateInterval: '05 Июн',
                link: 'https://online.mospolytech.ru/',
            },
            {
                name: 'Проектная деятельность (Практика)',
                timeInterval: '12:20 - 13:50',
                place: 'Прянишникова',
                rooms: ['ПД_1'],
                teachers: [''],
                dateInterval: '06 Фев - 03 Июн',
                link: null,
            },
        ],
    },
    Tuesday: {
        lessons: [
            {
                name: 'Численные методы в компьютерных вычислениях (Лекция)',
                timeInterval: '9:00 - 10:30',
                place: 'Webinar',
                rooms: [],
                teachers: ['Рудяк Юрий Владимирович'],
                dateInterval: '06 Фев - 09 Апр',
                link: 'https://events.webinar.ru/19401949/2040727204/session/1982670476',
            },
            {
                name: 'Тайм-менеджмент (Практика)',
                timeInterval: '9:00 - 10:30',
                place: 'Павла Корчагина',
                rooms: ['ПК318'],
                teachers: ['Бородачева Любовь Викторовна'],
                dateInterval: '16 Апр - 24 Апр',
                link: null,
            },
            {
                name: 'Тайм-менеджмент (Практика)',
                timeInterval: '9:00 - 10:30',
                place: 'Обучение LMS',
                rooms: [],
                teachers: ['Бородачева Любовь Викторовна'],
                dateInterval: '26 Апр - 07 Май',
                link: 'https://online.mospolytech.ru/',
            },
            {
                name: 'Тайм-менеджмент (Практика)',
                timeInterval: '9:00 - 10:30',
                place: 'Павла Корчагина',
                rooms: ['ПК318'],
                teachers: ['Бородачева Любовь Викторовна'],
                dateInterval: '09 Май - 21 Май',
                link: null,
            },
            {
                name: 'Тайм-менеджмент (Лекция)',
                timeInterval: '10:40 - 12:10',
                place: 'Обучение LMS',
                rooms: [],
                teachers: ['Бородачева Любовь Викторовна'],
                dateInterval: '06 Фев - 09 Апр',
                link: 'https://online.mospolytech.ru/',
            },
            {
                name: 'Тайм-менеджмент (Практика)',
                timeInterval: '10:40 - 12:10',
                place: 'Павла Корчагина',
                rooms: ['ПК318'],
                teachers: ['Бородачева Любовь Викторовна'],
                dateInterval: '16 Апр - 24 Апр',
                link: null,
            },
            {
                name: 'Тайм-менеджмент (Практика)',
                timeInterval: '10:40 - 12:10',
                place: 'Обучение LMS',
                rooms: [],
                teachers: ['Бородачева Любовь Викторовна'],
                dateInterval: '26 Апр - 07 Май',
                link: 'https://online.mospolytech.ru/',
            },
            {
                name: 'Тайм-менеджмент (Практика)',
                timeInterval: '10:40 - 12:10',
                place: 'Павла Корчагина',
                rooms: ['ПК318'],
                teachers: ['Бородачева Любовь Викторовна'],
                dateInterval: '09 Май - 21 Май',
                link: null,
            },
            {
                name: 'Философия (Лекция)',
                timeInterval: '12:20 - 13:50',
                place: 'Webinar',
                rooms: [],
                teachers: ['Плужникова Наталья Николаевна'],
                dateInterval: '06 Фев - 09 Апр',
                link: 'https://events.webinar.ru/19403925/2096675871/session/1313482180',
            },
            {
                name: 'Операционные системы (Лекция)',
                timeInterval: '14:30 - 16:00',
                place: 'Webinar',
                rooms: [],
                teachers: ['Попов Дмитрий Иванович'],
                dateInterval: '06 Фев - 09 Апр',
                link: 'https://events.webinar.ru/19404753/568368809/session/240352287',
            },
            {
                name: 'Численные методы в компьютерных вычислениях (Зачет)',
                timeInterval: '16:10 - 17:40',
                place: 'Webinar',
                rooms: [],
                teachers: ['Рудяк Юрий Владимирович'],
                dateInterval: '11 Апр',
                link: 'https://events.webinar.ru/19401995/1844276027/session/693154737',
            },
            {
                name: 'Тайм-менеджмент (Зачет)',
                timeInterval: '16:10 - 17:40',
                place: 'Обучение LMS',
                rooms: [],
                teachers: ['Бородачева Любовь Викторовна'],
                dateInterval: '23 Май',
                link: 'https://online.mospolytech.ru/',
            },
            {
                name: 'Тайм-менеджмент (Зачет)',
                timeInterval: '17:50 - 19:20',
                place: 'Обучение LMS',
                rooms: [],
                teachers: ['Бородачева Любовь Викторовна'],
                dateInterval: '23 Май',
                link: 'https://online.mospolytech.ru/',
            },
        ],
    },
    Wednesday: {
        lessons: [
            {
                name: 'Операционные системы (Лаб. работа)',
                timeInterval: '10:40 - 12:10',
                place: 'Прянишникова',
                rooms: ['Пр2662', 'Пр2668'],
                teachers: ['Лещенкова Екатерина Олеговна', 'Байрамов  Эльмин  Вагифович'],
                dateInterval: '06 Фев - 11 Июн',
                link: null,
            },
            {
                name: 'Иностранный язык (Практика)',
                timeInterval: '12:20 - 13:50',
                place: 'Прянишникова',
                rooms: ['Пр1014', 'Пр2815 в'],
                teachers: ['Володина Елена  Владимировна', 'Калитина Марина Николаевна'],
                dateInterval: '06 Фев - 11 Июн',
                link: null,
            },
            {
                name: 'Математический анализ (Практика)',
                timeInterval: '14:30 - 16:00',
                place: 'Прянишникова',
                rooms: ['Пр2609'],
                teachers: ['Малова Наталья Николаевна'],
                dateInterval: '06 Фев - 11 Июн',
                link: null,
            },
            {
                name: 'Общая физическая подготовка (см. график кафедры) (Практика)',
                timeInterval: '17:50 - 19:20',
                place: 'Михалковская ',
                rooms: ['_МСпортзал'],
                teachers: [''],
                dateInterval: '20 Фев - 11 Июн',
                link: null,
            },
        ],
    },
    Thursday: {
        lessons: [
            {
                name: 'Математический анализ (Лекция)',
                timeInterval: '9:00 - 10:30',
                place: 'Webinar',
                rooms: [],
                teachers: ['Спиридонов Михаил Яковлевич'],
                dateInterval: '03 Апр - 28 Май',
                link: 'https://events.webinar.ru/19399433/2116070837/session/641220624',
            },
            {
                name: 'Технологии прикладного программирования (Лекция)',
                timeInterval: '10:40 - 12:10',
                place: 'Webinar',
                rooms: [],
                teachers: ['Арсентьев Дмитрий Андреевич'],
                dateInterval: '03 Апр - 11 Июн',
                link: 'https://events.webinar.ru/19396587/1035100730/session/852182929',
            },
            {
                name: 'Математический анализ (Лекция)',
                timeInterval: '12:20 - 13:50',
                place: 'Webinar',
                rooms: [],
                teachers: ['Спиридонов Михаил Яковлевич'],
                dateInterval: '06 Фев - 02 Апр',
                link: 'https://events.webinar.ru/19404011/2068522527/session/206261290',
            },
            {
                name: 'Проектирование интерфейсов информационных систем (Лекция)',
                timeInterval: '12:20 - 13:50',
                place: 'Webinar',
                rooms: [],
                teachers: ['Евсеев Илья Владимирович'],
                dateInterval: '06 Апр',
                link: 'https://events.webinar.ru/19401173/2111407236/session/1937110466',
            },
            {
                name: 'Математический анализ (Лекция)',
                timeInterval: '12:20 - 13:50',
                place: 'Webinar',
                rooms: [],
                teachers: ['Спиридонов Михаил Яковлевич'],
                dateInterval: '30 Май - 11 Июн',
                link: 'https://events.webinar.ru/19399433/2116070837/session/641220624',
            },
            {
                name: 'Проектирование интерфейсов информационных систем (Лекция)',
                timeInterval: '14:30 - 16:00',
                place: 'Webinar',
                rooms: [],
                teachers: ['Евсеев Илья Владимирович'],
                dateInterval: '06 Фев - 02 Апр',
                link: 'https://events.webinar.ru/19404071/261830913/session/1755961416',
            },
            {
                name: 'Технологии прикладного программирования (Лекция)',
                timeInterval: '16:10 - 17:40',
                place: 'Webinar',
                rooms: [],
                teachers: ['Арсентьев Дмитрий Андреевич'],
                dateInterval: '06 Фев - 02 Апр',
                link: 'https://events.webinar.ru/19401995/1035680138/session/1266410075',
            },
        ],
    },
    Friday: {
        lessons: [
            {
                name: 'Проектирование интерфейсов информационных систем (Практика)',
                timeInterval: '9:00 - 10:30',
                place: 'Прянишникова',
                rooms: ['Пр2609'],
                teachers: ['Евсеев Илья Владимирович'],
                dateInterval: '06 Фев - 11 Июн',
                link: null,
            },
            {
                name: 'Технологии прикладного программирования (Лаб. работа)',
                timeInterval: '10:40 - 12:10',
                place: 'Прянишникова',
                rooms: ['Пр2662', 'Пр2668'],
                teachers: ['Арсентьев Дмитрий Андреевич', 'Гуляева  Виктория  Сергеевна'],
                dateInterval: '06 Фев - 11 Июн',
                link: null,
            },
            {
                name: 'Численные методы в компьютерных вычислениях (Лаб. работа)',
                timeInterval: '12:20 - 13:50',
                place: 'Прянишникова',
                rooms: ['Пр2802', 'Пр2814'],
                teachers: ['Норин Владимир Павлович', 'Рудяк Юрий Владимирович'],
                dateInterval: '06 Фев - 09 Апр',
                link: null,
            },
            {
                name: 'Операционные системы (Лаб. работа)',
                timeInterval: '12:20 - 13:50',
                place: 'Прянишникова',
                rooms: ['Пр2802', 'Пр2814'],
                teachers: ['Лещенкова Екатерина Олеговна', 'Байрамов  Эльмин  Вагифович'],
                dateInterval: '10 Апр - 11 Июн',
                link: null,
            },
            {
                name: 'Философия (Практика)',
                timeInterval: '14:30 - 16:00',
                place: 'Прянишникова',
                rooms: ['Пр1011'],
                teachers: ['Плужникова Наталья Николаевна'],
                dateInterval: '10 Апр - 11 Июн',
                link: null,
            },
        ],
    },
    Saturday: {
        lessons: [
            {
                name: 'Общая физическая подготовка (см. график кафедры) (Практика)',
                timeInterval: '17:50 - 19:20',
                place: 'Михалковская ',
                rooms: ['_М Спортзал'],
                teachers: [''],
                dateInterval: '06 Фев - 04 Июн',
                link: null,
            },
        ],
    },
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const get = (group: string) => {
    return $api.get<RawScheduleResponse>(`?getSchedule&group=${group}&token=${token()}`)
    // return emulateRequest({ data: MOCK }) as Promise<{ data: RawScheduleResponse }>
}

export const getTeachers = (fullName: string) => {
    return $api.get<RawTeacherScheduleResponse>(`?getScheduleTeacher&fio=${fullName}&token=${token()}`)
}

export const getSession = () => {
    return emulateRequest({
        data: {
            '2023/01/01': [MOCK.Friday],
        },
    })
}

export const getTeachersSession = (fullName: string) => {
    return $api.get(`?getScheduleTeacher&fio=${fullName}&session=1&token=${token()}`)
}
