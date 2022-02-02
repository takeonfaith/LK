import { scheduleApi } from '@api'
import { IModules, ISchedule, ISessionSchedule, IWeekSchedule, User, ViewType } from '@api/model'
import getCurrentDaySubjects from '@entities/schedule/lib/get-current-day-schedule'
import calcNextExamTime from '@features/schedule/lib/calc-next-exam.time'
import { createEffect, createEvent, createStore } from 'effector/compat'
import { useStore } from 'effector-react/compat'
import getCurrentDayString from '../lib/get-current-day-string'

const useSchedule = () => {
    return { data: useStore($schedule), loading: useStore(getScheduleFx.pending), error: useStore($schedule).error }
}

const getScheduleFx = createEffect(async (user: User | null): Promise<IModules> => {
    try {
        const response = !user?.subdivisions
            ? await scheduleApi.get()
            : await scheduleApi.getTeachers(user?.name ?? '', user?.surname ?? '', user?.patronymic ?? '')

        const sessionResponse = !user?.subdivisions
            ? await scheduleApi.getSession()
            : await scheduleApi.getTeachersSession(user?.name ?? '', user?.surname ?? '', user?.patronymic ?? '')
        const sessionSchedule: { [key: string]: any } | null = {}
        const fullSchedule: { [key: string]: any } = {}
        const currentWeekSchedule: IWeekSchedule = {
            monday: { lessons: [] },
            tuesday: { lessons: [] },
            wednesday: { lessons: [] },
            thursday: { lessons: [] },
            friday: { lessons: [] },
            saturday: { lessons: [] },
        }

        if (response.data.status !== 'error') {
            for (const key in response.data) {
                const transformedKey = key.charAt(0).toLowerCase() + key.slice(1)

                fullSchedule[transformedKey] = response.data[key]
            }

            for (const [key, value] of Object.entries(fullSchedule)) {
                currentWeekSchedule[key as keyof IWeekSchedule].lessons = getCurrentDaySubjects(value.lessons)
            }
        }
        if (sessionResponse.data.status !== 'error') {
            for (const key in sessionResponse.data) {
                sessionSchedule[key] = sessionResponse.data[key]
            }
        }

        return {
            '0':
                Object.keys(response.data).length && response.data.status !== 'error'
                    ? (currentWeekSchedule as IWeekSchedule)
                    : null,
            '1':
                Object.keys(response.data).length && response.data.status !== 'error'
                    ? (fullSchedule as IWeekSchedule)
                    : null,
            '2':
                Object.keys(sessionResponse.data).length && sessionResponse.data.status !== 'error'
                    ? (sessionSchedule as ISessionSchedule)
                    : null,
        }
    } catch {
        throw new Error('Не удалось загрузить расписание')
    }
})

const changeCurrentModule = createEvent<{ currentModule: number }>()
const changeView = createEvent<{ view: ViewType }>()
const changeCurrentChosenDay = createEvent<{ day: number }>()

const store: ISchedule = {
    schedule: null,
    currentModule: '0',
    currentDay: new Date().getDay(),
    currentDayString: 'sunday',
    currentChosenDay: new Date().getDay(),
    view: 'full',
    error: null,
}

const $schedule = createStore<ISchedule>(store)
    .on(getScheduleFx, (oldData) => ({
        ...oldData,
        error: null,
    }))
    .on(getScheduleFx.doneData, (oldData, newData) => ({
        ...oldData,
        schedule: newData,
        currentModule: !!newData['0'] ? '0' : !!newData['1'] ? '1' : newData['2'] ? '2' : '0',
        currentDayString: getCurrentDayString(newData, oldData.currentDay),
        currentChosenDay: calcNextExamTime(newData['2']),
        currentDay: !!newData['0'] ? new Date().getDay() : calcNextExamTime(newData['2']),
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
