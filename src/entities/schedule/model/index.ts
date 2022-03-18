import { IModules, ISchedule, User, ViewType } from '@api/model'
import calcNextExamTime from '@features/schedule/lib/calc-next-exam.time'
import { useStore } from 'effector-react/compat'
import { createEffect, createEvent, createStore } from 'effector/compat'
import getCurrentDayString from '../lib/get-current-day-string'
import getSchedule from '../lib/get-schedule'

const useSchedule = () => {
    return { data: useStore($schedule), loading: useStore(getScheduleFx.pending), error: useStore($schedule).error }
}

const getScheduleFx = createEffect(async (user: User | null): Promise<IModules> => {
    try {
        return getSchedule(user)
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
