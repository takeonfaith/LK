import { IFullSchedule, ISchedule, User, ViewType } from '@api/model'
import { createEffect, createEvent, createStore } from 'effector'
import { useStore } from 'effector-react/compat'
import getCurrentDayString from '../lib/get-current-day-string'
import getSchedule from '../lib/get-schedule'

const DEFAULT_STORE: ISchedule = {
    schedule: null,
    currentModule: 'today',
    currentDay: new Date().getDay(),
    currentDayString: '',
    currentChosenDay: new Date().getDay(),
    view: 'full',
    error: null,
}

const useSchedule = () => {
    return { data: useStore($schedule), loading: useStore(getScheduleFx.pending), error: useStore($schedule).error }
}

type GetScheduleProps = { user: User | null; group?: string }

const getScheduleFx = createEffect(async ({ user, group }: GetScheduleProps): Promise<IFullSchedule> => {
    try {
        return getSchedule(user, group)
    } catch (error) {
        throw new Error('Не удалось загрузить расписание')
    }
})

const changeCurrentModule = createEvent<{ currentModule: keyof IFullSchedule }>()
const changeView = createEvent<{ view: ViewType }>()
const changeCurrentChosenDay = createEvent<{ day: number }>()
const clearStore = createEvent()

const $schedule = createStore<ISchedule>(DEFAULT_STORE)
    .on(getScheduleFx, (oldData) => ({
        ...oldData,
        schedule: null,
        error: null,
    }))
    .on(getScheduleFx.doneData, (oldData, newData) => ({
        ...oldData,
        schedule: newData,
        currentModule: !!newData.today
            ? 'today'
            : !!newData.week
            ? 'week'
            : !!newData.semestr
            ? 'semestr'
            : !!newData.session
            ? 'session'
            : 'today',
        currentDayString: getCurrentDayString(newData, oldData.currentDay),
        currentChosenDay: 0,
        //calcNextExamTime(newData.semestr)
        currentDay: !!newData.week ? new Date().getDay() : 0,
    }))
    .on(getScheduleFx.failData, (oldData, error) => ({
        ...oldData,
        error: `${error.cause}, ${error.message}, ${error.stack}, ${error.name}`,
    }))
    .on(changeCurrentModule, (oldState, newState) => ({
        ...oldState,
        currentModule: newState.currentModule.toString() as keyof IFullSchedule,
    }))
    .on(changeView, (oldState, newState) => ({
        ...oldState,
        view: newState.view,
    }))
    .on(changeCurrentChosenDay, (oldState, newState) => ({
        ...oldState,
        currentChosenDay: newState.day,
    }))
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))

export const selectors = {
    useSchedule,
}

export const events = {
    changeCurrentModule,
    changeView,
    changeCurrentChosenDay,
    clearStore,
}

export const effects = {
    getScheduleFx,
}
