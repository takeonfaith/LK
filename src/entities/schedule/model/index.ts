import { createEffect, createEvent, createStore } from 'effector'
import { useStore } from 'effector-react'
import { IModules, ISchedule, ViewType } from '@api/model'

const useSchedule = () => {
    return { data: useStore($schedule), loading: useStore(getScheduleFx.pending), error: useStore($schedule).error }
}

const mock: IModules = {
    '0': {
        monday: {
            subjects: [
                {
                    timeInterval: '10:40 - 12:10',
                    name: 'Элективные курсы по физической культуре и спорту (Практика)',
                    place: 'Zoom',
                    teachers: ['Колесникова В. А.', 'Ципенюк А. Б.'],
                    dateInterval: '4 сен - 7 нояб',
                },
                {
                    timeInterval: '12:20 - 13:50',
                    name: 'Технология кроссплатформенного программирования (Лаб. работа)',
                    place: 'Zoom',
                    teachers: ['Колесникова В. А.', 'Ципенюк А. Б.'],
                    dateInterval: '4 сен - 1 нояб',
                },
                {
                    timeInterval: '14:30 - 16:00',
                    name: 'Интеллектуальные системы и технологии (Лаб. работа)',
                    place: 'Пряники',
                    teachers: ['Попова Е. В.'],
                    dateInterval: '4 сен - 1 нояб',
                },
            ],
        },
        tuesday: {
            subjects: [],
        },
        wednesday: {
            subjects: [
                {
                    timeInterval: '12:20 - 13:50',
                    name: 'Технология кроссплатформенного программирования (Лаб. работа)',
                    place: 'Пряники',
                    teachers: ['Колесникова В. А.', 'Ципенюк А. Б.'],
                    dateInterval: '4 сен - 1 нояб',
                },
                {
                    timeInterval: '14:30 - 16:00',
                    name: 'Программирование',
                    place: 'БС',
                    teachers: ['Колесникова В. А.', 'Ципенюк А. Б.'],
                    dateInterval: '4 сен - 1 нояб',
                },
                {
                    timeInterval: '16:10 - 17:40',
                    name: 'Теория информационных процессов и систем (Лаб. работа)',
                    place: 'БС',
                    teachers: ['Колесникова В. А.', 'Ципенюк А. Б.'],
                    dateInterval: '4 сен - 1 нояб',
                },
            ],
        },
        thursday: {
            subjects: [
                {
                    timeInterval: '9:00 - 10:30',
                    name: 'Математика',
                    place: 'ПК',
                    teachers: ['Колесникова В. А.', 'Ципенюк А. Б.'],
                    dateInterval: '4 сен - 1 нояб',
                },
                {
                    timeInterval: '12:20 - 13:50',
                    name: 'Технология кроссплатформенного программирования (Лаб. работа)',
                    place: 'Пряники',
                    teachers: ['Колесникова В. А.', 'Ципенюк А. Б.'],
                    dateInterval: '4 сен - 1 нояб',
                },
                {
                    timeInterval: '14:30 - 16:00',
                    name: 'Теория информационных процессов и систем (Лаб. работа)',
                    place: 'Пряники',
                    teachers: ['Колесникова В. А.', 'Ципенюк А. Б.'],
                    dateInterval: '4 сен - 1 нояб',
                },
            ],
        },
        friday: {
            subjects: [
                {
                    timeInterval: '10:40 - 12:10',
                    name: 'Программирование',
                    place: 'Пряники',
                    teachers: ['Колесникова В. А.', 'Ципенюк А. Б.'],
                    dateInterval: '4 сен - 1 нояб',
                },
                {
                    timeInterval: '12:20 - 13:50',
                    name: 'Технология кроссплатформенного программирования (Лаб. работа)',
                    place: 'Пряники',
                    teachers: ['Колесникова В. А.', 'Ципенюк А. Б.'],
                    dateInterval: '4 сен - 1 нояб',
                },
            ],
        },
        saturday: {
            subjects: [
                {
                    timeInterval: '9:00 - 10:30',
                    name: 'Математика',
                    place: 'ПК',
                    teachers: ['Колесникова В. А.', 'Ципенюк А. Б.'],
                    dateInterval: '4 сен - 1 нояб',
                },
                {
                    timeInterval: '14:30 - 16:00',
                    name: 'Программирование',
                    place: 'Пряники',
                    teachers: ['Колесникова В. А.', 'Ципенюк А. Б.'],
                    dateInterval: '4 сен - 1 нояб',
                },
                {
                    timeInterval: '16:10 - 17:40',
                    name: 'Теория информационных процессов и систем (Лаб. работа)',
                    place: 'Пряники',
                    teachers: ['Колесникова В. А.', 'Ципенюк А. Б.'],
                    dateInterval: '4 сен - 1 нояб',
                },
            ],
        },
    },
    '1': {
        monday: {
            subjects: [],
        },
        tuesday: {
            subjects: [
                {
                    timeInterval: '9:00 - 10:30',
                    name: 'Математика',
                    place: 'ПК',
                    teachers: ['Колесникова В. А.', 'Ципенюк А. Б.'],
                    dateInterval: '4 сен - 1 нояб',
                },
                {
                    timeInterval: '10:40 - 12:10',
                    name: 'Программирование',
                    place: 'Пряники',
                    teachers: ['Колесникова В. А.', 'Ципенюк А. Б.'],
                    dateInterval: '4 сен - 1 нояб',
                },
                {
                    timeInterval: '12:20 - 13:50',
                    name: 'Технология кроссплатформенного программирования (Лаб. работа)',
                    place: 'Пряники',
                    teachers: ['Колесникова В. А.', 'Ципенюк А. Б.'],
                    dateInterval: '4 сен - 1 нояб',
                },
                {
                    timeInterval: '14:30 - 16:00',
                    name: 'Программирование',
                    place: 'Пряники',
                    teachers: ['Колесникова В. А.', 'Ципенюк А. Б.'],
                    dateInterval: '4 сен - 1 нояб',
                },
                {
                    timeInterval: '16:10 - 17:40',
                    name: 'Теория информационных процессов и систем (Лаб. работа)',
                    place: 'Пряники',
                    teachers: ['Колесникова В. А.', 'Ципенюк А. Б.'],
                    dateInterval: '4 сен - 1 нояб',
                },
            ],
        },
        wednesday: {
            subjects: [
                {
                    timeInterval: '14:30 - 16:00',
                    name: 'Теория информационных процессов и систем (Лаб. работа)',
                    place: 'Пряники',
                    teachers: ['Колесникова В. А.', 'Ципенюк А. Б.'],
                    dateInterval: '4 сен - 1 нояб',
                },
            ],
        },
        thursday: {
            subjects: [
                {
                    timeInterval: '9:00 - 10:30',
                    name: 'Математика',
                    place: 'Webinar',
                    teachers: ['Колесникова В. А.', 'Ципенюк А. Б.'],
                    dateInterval: '4 сен - 1 нояб',
                },
                {
                    timeInterval: '14:30 - 16:00',
                    name: 'Программирование',
                    place: 'Пряники',
                    teachers: ['Колесникова В. А.', 'Ципенюк А. Б.'],
                    dateInterval: '4 сен - 1 нояб',
                },
                {
                    timeInterval: '16:10 - 17:40',
                    name: 'Теория информационных процессов и систем (Лаб. работа)',
                    place: 'Пряники',
                    teachers: ['Колесникова В. А.', 'Ципенюк А. Б.'],
                    dateInterval: '4 сен - 1 нояб',
                },
            ],
        },
        friday: {
            subjects: [
                {
                    timeInterval: '9:00 - 10:30',
                    name: 'Математика',
                    place: 'Webinar',
                    teachers: ['Колесникова В. А.', 'Ципенюк А. Б.'],
                    dateInterval: '4 сен - 1 нояб',
                },
                {
                    timeInterval: '10:40 - 12:10',
                    name: 'Программирование',
                    place: 'Пряники',
                    teachers: ['Колесникова В. А.', 'Ципенюк А. Б.'],
                    dateInterval: '4 сен - 1 нояб',
                },
            ],
        },
        saturday: {
            subjects: [
                {
                    timeInterval: '9:00 - 10:30',
                    name: 'Математика',
                    place: 'Webinar',
                    teachers: ['Колесникова В. А.', 'Ципенюк А. Б.'],
                    dateInterval: '4 сен - 1 нояб',
                },
                {
                    timeInterval: '10:40 - 12:10',
                    name: 'Программирование',
                    place: 'Пряники',
                    teachers: ['Колесникова В. А.', 'Ципенюк А. Б.'],
                    dateInterval: '4 сен - 1 нояб',
                },
                {
                    timeInterval: '12:20 - 13:50',
                    name: 'Технология кроссплатформенного программирования (Лаб. работа)',
                    place: 'Пряники',
                    teachers: ['Колесникова В. А.', 'Ципенюк А. Б.'],
                    dateInterval: '4 сен - 1 нояб',
                },
                {
                    timeInterval: '14:30 - 16:00',
                    name: 'Программирование',
                    place: 'Zoom',
                    teachers: ['Колесникова В. А.', 'Ципенюк А. Б.'],
                    dateInterval: '4 сен - 1 нояб',
                },
                {
                    timeInterval: '16:10 - 17:40',
                    name: 'Теория информационных процессов и систем (Лаб. работа)',
                    place: 'Zoom',
                    teachers: ['Колесникова В. А.', 'Ципенюк А. Б.'],
                    dateInterval: '4 сен - 1 нояб',
                },
            ],
        },
    },
}

const getScheduleFx = createEffect(async (groupNumber: string): Promise<IModules> => {
    // const data = await scheduleApi.get(groupNumber)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    // throw new Error('Не удалось загрузить расписание')
    return mock
})

const changeCurrentModule = createEvent<{ currentModule: number }>()
const changeView = createEvent<{ view: ViewType }>()
const changeCurrentChosenDay = createEvent<{ day: number }>()

const store: ISchedule = {
    schedule: null,
    currentModule: '0',
    currentDay: new Date().getDay(),
    currentChosenDay: new Date().getDay(),
    view: 'full',
    error: null,
}

const $schedule = createStore<ISchedule>(store)
    .on(getScheduleFx, (oldData, _) => ({
        ...oldData,
        error: null,
    }))
    .on(getScheduleFx.doneData, (oldData, newData) => ({
        ...oldData,
        schedule: newData,
    }))
    .on(getScheduleFx.failData, (oldData, newData) => ({
        ...oldData,
        error: newData.message,
    }))
    .on(changeCurrentModule, (oldState, newState) => ({
        ...oldState,
        currentModule: newState.currentModule.toString() as keyof IModules,
    }))
    .on(changeView, (oldState, newState) => ({
        ...oldState,
        view: newState.view,
    }))
    .on(changeCurrentChosenDay, (oldState, newState) => ({
        ...oldState,
        currentChosenDay: newState.day,
    }))

export const selectors = {
    useSchedule,
}

export const events = {
    changeCurrentModule,
    changeView,
    changeCurrentChosenDay,
}

export const effects = {
    getScheduleFx,
}
